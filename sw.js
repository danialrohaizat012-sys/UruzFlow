const C='uruz-flow-v7-clean-icon';
const A=['./','index.html','manifest.json','uruz-logo.png','icon-192.png','icon-512.png','apple-touch-icon.png','favicon.svg','favicon-32.png','favicon-16.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
