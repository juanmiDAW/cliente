// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Amaclon</h1>
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/otraPagina">Otra Página</Link>
    </nav>
  </header>
);

export default Header;
