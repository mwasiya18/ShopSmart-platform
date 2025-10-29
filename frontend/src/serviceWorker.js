const CACHE_NAME = 'shopsmart-cache-v1';
const OFFLINE_URL = '/offline.html';

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  OFFLINE_URL,
  '/manifest.json',
  '/logo192.png',
  '/logo512.png',
  '/favicon.ico',
  '/static/js/bundle.js',
  '/static/js/main.js',
  '/static/css/main.css'
];

// 🔹 Install event: cache essential assets
self.addEventListener('install', event => {
  console.log('📦 Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('✅ Caching assets...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 🔹 Activate event: clean up old caches
self.addEventListener('activate', event => {
  console.log('🔄 Service Worker activating...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('🧹 Removing old cache:', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// 🔹 Fetch event: serve cached assets or fallback to offline
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Optionally cache new requests here
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cachedResponse => {
          return cachedResponse || caches.match(OFFLINE_URL);
        });
      })
  );

  self.addEventListener('push', event => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: '/logo192.png'
  });
});
});