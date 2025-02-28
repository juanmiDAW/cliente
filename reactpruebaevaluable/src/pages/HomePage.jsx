// src/pages/HomePage.jsx
import React, { useState } from 'react';
import Products from '../components/Products';
import Cart from '../components/Cart';

const PaginaInicio = () => {
  const [carritoItems, setCarritoItems] = useState([]);

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    setCarritoItems([...carritoItems, producto]);
  };

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (carritoActualizado) => {
    setCarritoItems(carritoActualizado);
  };

  return (
    <div>
      <h2>Página de Inicio</h2>
      <Products agregarAlCarrito={agregarAlCarrito} />
      <Cart cartItems={carritoItems} eliminarDelCarrito={eliminarDelCarrito} />
    </div>
  );
};

export default PaginaInicio;
