import React from 'react';
import './Cart.css';

const Cart = ({ cartItems: articulosCarrito, removeItem: eliminarArticulo }) => {
  // Función para calcular el total del carrito
  const calcularTotal = () => {
    return articulosCarrito.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);
  };

  return (
    <div className='div-carrito'>
      <h2>Carrito de Compras</h2>
      {articulosCarrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <div className='linea-carrito'>
            {articulosCarrito.map((item) => (
              <div className='item-carrito' key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className='articulo'>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.price}€ x {item.cantidad}</p>
                <button onClick={() => eliminarArticulo(item.id)}>Eliminar</button>
              </div>
            ))}
          </div>
          <div>
            <h3>Total: {calcularTotal()}€</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
