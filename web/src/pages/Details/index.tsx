import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import Point from '../../components/Point';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

interface Data {
  point: {
    id: number;
    name: string;
    image_url: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  },
  items: {
    title: string
  }[];
}

interface PointParams {
  id: string;
}

const Details: React.FC<Data> = () => { 
  const params = useParams<PointParams>();
  const [data, setData] = useState<Data>();


  useEffect(() => {
    api.get(`points/${params.id}`).then(response => {
      setData(response.data);
      console.log(response.data);
    });
  }, [params.id]);


  if (!data) {
    return <p>Carregando</p>
  }

  return (
    <Container>
      <Header />
      <main>
        <Point point={data.point} items={data.items} >
        </Point>
      </main>
    </Container>
  )
}

export default Details;