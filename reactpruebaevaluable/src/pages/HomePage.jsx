import React, { useState } from 'react';
import Products from '../components/Products';
import Cart from '../components/Cart';

const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, incrementamos el count
      const updatedCart = cartItems.map(item =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // Si el producto no está en el carrito, lo agregamos con count 1
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
  };

  // Función para eliminar un producto del carrito
  const removeItem = (updatedCart) => {
    setCartItems(updatedCart);
  };

  return (
    <div className='inicio'>
      <h2>Página de Inicio</h2>
      <div className='div-web'>

        <Products addToCart={addToCart} />
        <Cart  cartItems={cartItems} removeItem={removeItem} />
      </div>
    </div>
  );
};

export default HomePage;
