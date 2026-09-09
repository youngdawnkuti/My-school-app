const CACHE_NAME = 'student-space-v3'; // bump this — forces the browser to treat it as a new SW and re-cache everything fresh
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
    caches.open(CACHE_NAME).then(async (cache) => {
      // Only cache successful responses — never let a 404/error get cached as if it were valid
      await Promise.all(ASSETS_TO_CACHE.map(async (url) => {
        try {
          const response = await fetch(url);
          if (response.ok) {
            await cache.put(url, response);
          } else {
            console.warn(`Skipped caching ${url} — server returned ${response.status}`);
          }
        } catch (err) {
          console.warn(`Skipped caching ${url} — fetch failed`, err);
        }
      }));
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
