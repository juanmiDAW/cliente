import React, { useState } from 'react';
import Products from '../components/Products';
import Cart from '../components/Cart';

const HomePage = () => {
  const [articulosCarrito, setArticulosCarrito] = useState([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setArticulosCarrito(prevCarrito => {
      const productoExistente = prevCarrito.find(item => item.id === producto.id);

      if (productoExistente) {
        return prevCarrito.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  // Función para eliminar un producto del carrito
  const eliminarArticulo = (id) => {
    setArticulosCarrito(prevCarrito => {
      return prevCarrito
        .map(item => 
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter(item => item.cantidad > 0);
    });
  };

  return (
    <div className='inicio'>
      <h2>Página de Inicio</h2>
      <div className='div-web'>
        <Products addToCart={agregarAlCarrito} />
        <Cart cartItems={articulosCarrito} removeItem={eliminarArticulo} />
      </div>
    </div>
  );
};

export default HomePage;
