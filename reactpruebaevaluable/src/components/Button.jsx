// src/components/Button.jsx
import React from 'react';

const Button = ({ text, onClick, link }) => (
  <button onClick={onClick}>
    {link ? <a href={link} target="_blank" rel="noopener noreferrer">{text}</a> : text}
  </button>
);

export default Button;
