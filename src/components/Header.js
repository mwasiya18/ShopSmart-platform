import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{
      backgroundColor: darkMode ? '#111' : '#1e1e2f',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <h1>ShopSmart</h1>
      <nav>
        <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
        <Link to="/cart" style={{ color: 'white', marginRight: '1rem' }}>Cart</Link>
        <button onClick={toggleTheme} style={{
          background: 'transparent',
          border: '1px solid white',
          color: 'white',
          padding: '0.3rem 0.6rem',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
}

export default Header;