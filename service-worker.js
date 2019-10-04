importScripts('js/cache-polyfill.js');

// Este service worker cachea todos los recursos para no generar trafico en la red y convierte a la PWA en instalable.
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('libredeuda').then(function(cache) {
      return cache.addAll([
        'index.html',
        'css/styles.css',
        'css/bootstrap.min.css',
        'css/animatedcss.css',
        'js/vue.min.js',
        'js/bootstrap.bundle.min.js',
        'js/jquery-3.3.1.slim.min.js',
        'js/num2string.js',
        'js/moment.min.js',
        // 'js/app',
        'img/topography.svg',
      ]);
    })
  );
});
self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
    // si la info esta cacheada, muestra eso, caso contrario realiza el fetch al server.
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});