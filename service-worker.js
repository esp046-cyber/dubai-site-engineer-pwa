const CACHE_NAME = 'agac-dubai-v2';
const ASSETS = [
  './',
  'index.html',
  'style.css',
  'script.js',
  'manifest.json',
  'offline.html',
  'icon-192.png',
  'icon-512.png',
  'icon-512-maskable.png',
  'favicon.ico',
  'assets/og-image.png',
  'assets/icons/apple-touch-icon.png',
  'api/tips.json',
  'config/site.config.js',
  'docs/SITE_CHECKLIST.md',
  'docs/UAE_REGULATIONS.md'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// Cache-first with network fallback; navigations fall back to offline.html
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(resp => {
        if (resp && resp.ok && new URL(event.request.url).origin === location.origin) {
          const copy = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, copy));
        }
        return resp;
      }).catch(() => {
        if (event.request.mode === 'navigate') return caches.match('offline.html');
        return new Response('', { status: 504, statusText: 'Offline' });
      });
    })
  );
});
