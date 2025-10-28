// src/context/ProductContext.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const ProductContext = createContext();

// Create the provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Add a new product
  const addProduct = async (product) => {
    try {
      const res = await axios.post('http://localhost:5000/api/products', product);
      setProducts([...products, res.data]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Fetch products on initial load
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};