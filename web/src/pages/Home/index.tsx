import React from 'react';
import { Container, Content } from './styles';
import Header from '../../components/Header';

const Home = () => {
  return (
    <Container>
      <Content>
        <Header />
        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
        </main>
      </Content>
    </Container>
  )
}

export default Home;