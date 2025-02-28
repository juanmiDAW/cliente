// src/pages/OtherPage.jsx
import React from 'react';
import Button from '../components/Button';
import OtherPage from '../components/OtherPage';

const OtraPagina = () => (
  <div>
    <Button text="Regresar a la Página de Inicio" link="/" />
    <OtherPage />
  </div>
);

export default OtraPagina;
