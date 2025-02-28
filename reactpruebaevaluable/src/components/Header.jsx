// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => (
  <header>
    <div className='div-logo'>
    <img className='logo' src={logo} alt="" />
    <h1>Amaclon</h1>

    </div>
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/otraPagina">¿Quienes somos?</Link>
      <Link
  to="#"
  onClick={(e) => {
    e.preventDefault();  // Evitar que React Router maneje la navegación
    window.open('https://www.google.com', '_blank');  // Abrir la URL externa en una nueva pestaña
  }}
>
  Ir a Google
</Link>


    </nav>
  </header>
);

export default Header;
