import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductForm = () => {
  const { addProduct } = useContext(ProductContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return alert('All fields required');
    addProduct({ name, price: parseInt(price) });
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Product Name" />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" type="number" />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;