// Service Worker for 课文背后的故事
// Strategy: cache-first for static assets, network-first for pages

const CACHE_NAME = "ketang-v1";
const STATIC_ASSETS = [
  "/",
  "/lessons/",
  "/favicon.svg",
  "/manifest.json",
  "/images/book-river.svg",
  "/css/global.css",
];

// Install: pre-cache critical assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {});
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch: hybrid strategy
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Only handle GET requests
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Skip cross-origin requests (fonts, etc.)
  if (url.origin !== self.location.origin) return;

  // Skip RSS and sitemap
  if (url.pathname === "/rss.xml" || url.pathname === "/sitemap-index.xml") return;

  // For navigation requests (pages): network-first with cache fallback
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful page responses
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone).catch(() => {});
            });
          }
          return response;
        })
        .catch(() => {
          // Network failed: try cache, then fallback to cached home page
          return caches.match(request).then((cached) => {
            return cached || caches.match("/") || caches.match("/lessons/");
          });
        })
    );
    return;
  }

  // For static assets (images, CSS, JS): cache-first with network fallback
  if (
    url.pathname.startsWith("/images/") ||
    url.pathname.startsWith("/_astro/") ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".woff2")
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone).catch(() => {});
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // Default: try network, fallback to cache
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok && response.type === "basic") {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone).catch(() => {});
          });
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});
