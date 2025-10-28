import React from 'react';
import { ProductProvider } from './context/ProductContext';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <h1>ShopSmart</h1>
        <ProductForm />
        <ProductList />
      </div>
    </ProductProvider>
  );
}

export default App;