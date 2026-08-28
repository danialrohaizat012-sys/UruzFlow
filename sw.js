const C='uruz-flow-v6';const A=['./','index.html','manifest.json','uruz-logo.png','icon-192.png','icon-512.png','favicon.svg','favicon-32.png','favicon-16.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
