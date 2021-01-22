import React from 'react'
import { FiClipboard, FiMap } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Ecoleta" />
      </Link>
      <nav>
        <Link to="/create-point">
          <span>
            <FiClipboard />
          </span>
          <strong>Cadastrar ponto</strong>
        </Link>
        <Link to="/points">
          <span>
            <FiMap />
          </span>
          <strong>Listar pontos</strong>
        </Link>
      </nav>
    </Container>
  )
}

export default Header;