/**
 * Paradox Navigator — Service Worker
 * Provides offline caching for the PWA experience.
 * 
 * Strategy:
 *  - CACHE_FIRST for static assets (CSS, JS, images, fonts)
 *  - NETWORK_FIRST for HTML (to pick up event data updates)
 */

const CACHE_NAME = 'paradox-navigator-v2.3';

// Core assets to pre-cache on install
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './src/data/paradoxStore.json',
  './css/tabler-icons.min.css',
  './css/fonts/tabler-icons.woff2',
  './css/fonts/tabler-icons.woff',
  './css/fonts/tabler-icons.ttf',
];

// Install: Pre-cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching core assets');
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  // Activate immediately without waiting
  self.skipWaiting();
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => {
            console.log('[SW] Removing old cache:', key);
            return caches.delete(key);
          })
      );
    })
  );
  // Take control of all pages immediately
  self.clients.claim();
});

// Fetch: Strategy-based caching
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests that we can't cache (e.g., analytics)
  // But allow Google Fonts and Tabler Icons CDN
  if (
    url.origin !== self.location.origin &&
    !url.hostname.includes('fonts.googleapis.com') &&
    !url.hostname.includes('fonts.gstatic.com') &&
    !url.hostname.includes('cdn.jsdelivr.net') &&
    !url.hostname.includes('unpkg.com')
  ) {
    return;
  }

  // HTML files: Network-first (get fresh content if online)
  if (event.request.destination === 'document' || url.pathname.endsWith('.html')) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  // Static assets (CSS, JS, images, fonts): Cache-first
  event.respondWith(cacheFirst(event.request));
});

/**
 * Cache-first: Return cached version if available, otherwise fetch and cache.
 */
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request, { ignoreSearch: true });

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    // Only cache successful responses
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (err) {
    // If both cache and network fail, return a basic offline response
    console.warn('[SW] Cache-first failed for:', request.url);
    return new Response('Offline — resource not cached', {
      status: 503,
      statusText: 'Service Unavailable',
    });
  }
}

/**
 * Network-first: Try network, fall back to cache.
 */
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (err) {
    const cachedResponse = await cache.match(request, { ignoreSearch: true });
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response(
      '<!DOCTYPE html><html><body style="font-family:sans-serif;text-align:center;padding:60px"><h2>📡 You are offline</h2><p>Paradox Navigator could not load. Please check your connection and try again.</p></body></html>',
      {
        headers: { 'Content-Type': 'text/html' },
        status: 503,
      }
    );
  }
}
