const CACHE_NAME = 'quiz-zone-v1';
const ASSETS_TO_CACHE = [
  './',
  './dashboard.html',
  './admin.html',
  './mathematics.html',
  './quiz.html',
  './questions.js'
];

// Install Service Worker and cache all assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Serve cached files when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});