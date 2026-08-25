const CACHE_NAME = "retro-revivals-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./script.js",
  "./manifest.json",
  "./icon-192.svg",
  "./icon-512.svg",
  "./favicon.svg",
  "./logo.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
