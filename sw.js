const CACHE_NAME = 'student-space-v1';
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

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      // Return cached version or attempt network load
      return cachedResponse || fetch(e.request).catch(() => {
        // Fallback to offline index.html if request fails
        return caches.match('./index.html');
      });
    })
  );
});
