/* Cycle gymnastique : l'écran de cours et l'outil sont mis en cache à la 1re ouverture (Wi-Fi), puis fonctionnent sans réseau.
   Après une modification : augmenter le numéro de C (construire.py le fait pour l'écran de cours). */
const C='cycle-gym-v2';
// Toutes les applis partagent le même stockage (même adresse github.io) : on n'efface QUE les anciennes versions de CETTE appli.
const MES_CACHES=/^(?:cycle\-gym\-v)\d+$/;

// Wi-Fi faible au gymnase : si le réseau ne répond pas en 3 s, on ouvre la copie gardée sur l'appareil.
const sous3s=p=>{p.catch(()=>{});return Promise.race([p,new Promise((_,non)=>setTimeout(()=>non(new Error('réseau lent')),3000))])};
const FILES=["gym-donnees.js", "outils.html", "polices/archivo.woff2", "polices/atkinson-400.woff2", "polices/atkinson-700.woff2", "eps-design.css", "eps-outil.css", "eps-charte-v1.css", "ecran.css", "ecran.js", "eps-maj.js", "aide-ecran.js", "eps-aide.js", "./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-180.png", "icon-32.png", "icon-512.png", "img/pictos/a1A.png","img/pictos/a1B.png","img/pictos/a1C.png","img/pictos/a1D.png","img/pictos/a1E.png","img/pictos/a1F.png","img/pictos/a2A.png","img/pictos/a2B.png","img/pictos/a2D.png","img/pictos/a2E.png","img/pictos/a2F.png","img/pictos/a3A.png","img/pictos/a3B.png","img/pictos/a3C.png","img/pictos/a3D.png","img/pictos/a3E.png","img/pictos/a3F.png","img/pictos/a4A.png","img/pictos/a4B.png","img/pictos/a4C.png","img/pictos/a4D.png","img/pictos/a4F.png","img/pictos/a5A.png","img/pictos/a5B.png","img/pictos/a5C.png","img/pictos/a5D.png","img/pictos/a5E.png","img/pictos/a5F.png","img/pictos/a6A.png","img/pictos/a6B.png","img/pictos/a6C.png","img/pictos/a6D.png","img/pictos/a6E.png","img/pictos/a6F.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(FILES.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>MES_CACHES.test(k)&&k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
  const net=fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r});
  e.respondWith(sous3s(net).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html')).then(r=>r||net)))});
