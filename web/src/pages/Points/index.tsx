import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import imgMarker from '../../assets/map-marker.svg'
import api from '../../services/api';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface Point {
  id: number;
  name: string;
  image_url: string;
  latitude: number;
  longitude: number;
}

const Points = () => {

  const [items, setItems] = useState<Item[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);


  const mapIcon = Leaflet.icon({
    iconUrl: imgMarker,

    iconSize: [36, 68],
    iconAnchor: [18, 68],
    popupAnchor: [0, -50]
  })

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('points', {
      params: {
        items: selectedItems
      }
    }).then(response => {
      setPoints(response.data)
    })
  }, [selectedItems]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex(item => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);

      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  return (
    <Container>
      <Header />
      <main>
        <p>Encontre no mapa um ponto de coleta.</p>
        <div>
          <Map center={initialPosition} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {points.map(point => (
              <Marker key={String(point.id)} icon={mapIcon} position={[point.latitude, point.longitude]}>
                <Popup closeButton={false} minWidth={200} maxWidth={200} className="map-popup" >
                  <div className="img">
                    <img src={point.image_url} alt={point.name} />
                  </div>
                  <div className="title">
                    {point.name}
                    <Link to={`details/${point.id}`}>
                      <FiArrowRight size={20} color="#fff" />
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}

          </Map>
        </div>
        <ul className="items-grid">
          {items.map(item => (
            <li
              key={item.id}
              onClick={() => handleSelectItem(item.id)}
              className={selectedItems.includes(item.id) ? 'selected' : ''}
            >
              <img src={item.image_url} alt={item.title} />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </main>
    </Container>
  )
}

export default Points;