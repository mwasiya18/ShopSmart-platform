self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('shopsmart-cache').then(cache => {
      return cache.addAll([
        '/',
        '/offline.html',
        '/static/js/bundle.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request).then(response => response || caches.match('/offline.html'))
    )
  );
});