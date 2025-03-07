import React from 'react';
import './Button.css'; // Archivo de estilos para el botón.

// Componente de botón reutilizable que puede funcionar como botón normal o como enlace.
const Button = ({ text, onClick, link }) => (
  <button onClick={onClick}> 
    {/* Si hay un enlace, se muestra como un <a>, de lo contrario, solo es texto. */}
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer"> 
        {text}
      </a>
    ) : text}
  </button>
);

export default Button; // Exporta el componente para su uso en otros archivos.
