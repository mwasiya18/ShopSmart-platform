import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 🔹 Render the main React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// 🔹 Register the service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(registration => {
        console.log('✅ Service Worker registered with scope:', registration.scope);

        // Optional: Listen for updates
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                console.log('🔄 New content is available; please refresh.');
              } else {
                console.log('✅ Content is cached for offline use.');
              }
            }
          };
        };
      })
      .catch(error => {
        console.error('❌ Service Worker registration failed:', error);
      });
  });
}