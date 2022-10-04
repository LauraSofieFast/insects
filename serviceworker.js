const cacheName = 'chache-insects';


// Når websitet indlæses, cache ressourcer nævnt i listen.

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(['/insects/', '/insects/index.html', '/insects/butterflies.jpg', '/insects/butterfly.jpg', '/index/dragonfly.jpg']);
        })
    );
});

// Hvis ressourcerne ikke er tilgængelig online, så søg i cachen efter et match
self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).catch(() => caches.open(cacheName).then(cache => cache.match(event.request))
        )
    );
});
