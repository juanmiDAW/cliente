import React from 'react';
import './Cart.css'; // Archivo de estilos para el carrito de compras.

// Componente que representa el carrito de compras.
const Cart = ({ cartItems: articulosCarrito, removeItem: eliminarArticulo }) => {
  // Calcula el total del carrito sumando el precio de cada artículo por su cantidad.
  const calcularTotal = () => {
    return articulosCarrito.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);
  };

  return (
    <div className='div-carrito'>
      <h2>Carrito de Compras</h2>
      {/* Muestra un mensaje si el carrito está vacío, de lo contrario, muestra los artículos. */}
      {articulosCarrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <div className='linea-carrito'>
            {/* Itera sobre los artículos y los muestra en el carrito. */}
            {articulosCarrito.map((item) => (
              <div className='item-carrito' key={item.id}>
                <img src={item.image} alt={item.title} /> {/* Imagen del artículo */}
                <div className='articulo'>
                  <h3>{item.title}</h3> {/* Nombre del artículo */}
                </div>
                <p>{item.price}€ x {item.cantidad}</p> {/* Precio y cantidad del artículo */}
                <button onClick={() => eliminarArticulo(item.id)}>Eliminar</button> {/* Botón para eliminar el artículo */}
              </div>
            ))}
          </div>
          <div>
            <h3>Total: {calcularTotal()}€</h3> {/* Muestra el total del carrito */}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart; // Exporta el componente para su uso en otros archivos.
