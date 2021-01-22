import React from 'react';
import './styles.css';
import Header from '../../components/Header';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <Header />
        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encotnrarem pontos de coleta de forma eficiente.</p>
        </main>
      </div>
    </div>
  );
}

export default Home;