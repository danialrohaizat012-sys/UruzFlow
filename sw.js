const C='uruz-flow-v17-5-performance';
const A=['./','index.html','manifest.json','uruz-logo.png','icon-192.png','icon-512.png','apple-touch-icon.png','favicon.svg','favicon-16.png','favicon-32.png','favicon-48.png','favicon-64.png','uruz-emblem-original.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);
 if(e.request.method!=='GET') return;
 if(u.pathname.endsWith('/index.html')||u.pathname.endsWith('/')||u.pathname.endsWith('/firebase-config.js')){
   e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)));
   return;
 }
 e.respondWith(caches.match(e.request).then(cached=>{
   const fresh=fetch(e.request).then(r=>{if(r&&r.ok){const c=r.clone();caches.open(C).then(x=>x.put(e.request,c))}return r}).catch(()=>cached);
   return cached||fresh;
 }));
});
