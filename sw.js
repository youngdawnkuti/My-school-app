const CACHE_NAME = 'student-space-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './admin.html',
  './mathematics.html',
  './quiz.html',
  './questions.js',
  './manifest.json',
  './icon.png'
];

// Install Event - Pre-cache all files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event - Clean up old caches (v1)
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Support Query Strings (e.g. quiz.html?subject=mathematics&level=1)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(e.request).catch(() => {
        // Offline Fallback for navigation
        if (e.request.mode === 'navigate') {
          return caches.match('./quiz.html') || caches.match('./index.html');
        }
      });
    })
  );
});
