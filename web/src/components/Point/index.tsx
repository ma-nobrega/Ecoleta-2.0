import React from 'react'
import { FiMail } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { Container, Content, Img } from './styles';

interface PointProps {
  point: {
    id: number;
    name: string;
    image_url: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  }
  items: {
    title: string
  }[];
}

const Point: React.FC<PointProps> = ({ point, items }) => {

  return (
    <Container id={String(point.id)}>
      <Img>
        <img src={point.image_url} alt={point.name} />
      </Img>
      <Content>
        <div className="entity">
          <div className="title">
            <h1>{point.name}</h1>
          </div>
          <span> {items.map(item => item.title).join(', ')}</span>
        </div>
        <div className="adress">
          <h3>Endereço</h3>
          <span>{point.city}, {point.uf}</span>
        </div>
        <div className="contact">
          <a target="blank" href={`https://wa.me/${point.whatsapp}?text=Tenho%20interesse%20sobre%20coleta%20de%20residuos%20de%20${items.map(item => item.title).join(', ')}`}>
            <span>
              <ImWhatsapp />
            </span>
            <strong>WhatsApp</strong>
          </a>
          <a target="blank" href={`mailto:${point.email}?Subject=Coleta%20de%20residuos&Body=Desejo%20informa%E7%F5es%20sobre%20coleta%20de%20${items.map(item => item.title).join(', ')}`}>
            <span>
              <FiMail />
            </span>
            <strong>Email</strong>
          </a>
        </div>
      </Content>
    </Container>
  )
}

export default Point;