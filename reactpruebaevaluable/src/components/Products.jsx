// src/components/Products.jsx
import React, { useState, useEffect } from 'react';
import Button from './Button';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando productos...</div>;

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}€</p>
            <Button text="Agregar al carrito" onClick={() => addToCart(product)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
