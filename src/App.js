import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <Router>
      <div className="wrapper">
        <header>
          <h1>ShopSmart</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/cart">Cart</Link>
          </nav>
          <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <footer>
          <p>© 2025 ShopSmart. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;