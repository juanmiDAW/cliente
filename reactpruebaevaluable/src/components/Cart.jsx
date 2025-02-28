// src/components/Cart.jsx
import React from 'react';

const Cart = ({ cartItems, removeItem }) => {
  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Función para manejar la eliminación de un solo producto
  const handleRemoveItem = (id) => {
    // Elimina solo una instancia del producto con ese ID
    const updatedCart = cartItems.filter((item, index) => {
      return item.id === id && index === cartItems.findIndex(cartItem => cartItem.id === id);
    });
    removeItem(updatedCart);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.title} style={{ width: 50, height: 50 }} />
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div>
            <h3>Total: ${calculateTotal()}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
