import React from 'react';
import { ProductProvider } from './context/ProductContext';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import Recommendation from './Recommendation';

function App() {
  // You can change this to dynamically reflect the selected product
  const selectedProductId = '1'; // Example: Red Shirt

  return (
    <ProductProvider>
      <div className="App">
        <h1>ShopSmart</h1>
        <ProductForm />
        <ProductList />

        {/* 🔍 Personalized Recommendations */}
        <Recommendation productId={selectedProductId} />
      </div>
    </ProductProvider>
  );
}

export default App;