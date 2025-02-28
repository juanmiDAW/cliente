import React from 'react';

const Cart = ({ cartItems, removeItem }) => {
  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
  };

  // Función para manejar la eliminación de una sola instancia de un producto
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id && item.count > 1) {
        // Si el producto tiene más de una unidad, solo reducimos el count
        return { ...item, count: item.count - 1 };
      } else if (item.id === id && item.count === 1) {
        // Si el producto solo tiene una unidad, lo eliminamos del carrito
        return null;
      }
      return item;
    }).filter(item => item !== null); // Eliminamos los productos con null (cuando count == 0)

    // Actualizamos el carrito
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
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} style={{ width: 50, height: 50 }} />
                <h3>{item.title}</h3>
                <p>${item.price} x {item.count}</p>
                <button onClick={() => handleRemoveItem(item.id)}>Eliminar una unidad</button>
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
