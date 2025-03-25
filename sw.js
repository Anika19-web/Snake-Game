self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("snake-game-cache").then(function (cache) {
      return cache.addAll(["index.html", "style.css", "script.js", "icon.png"]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});