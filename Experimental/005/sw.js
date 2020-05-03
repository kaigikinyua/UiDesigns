//cache-name
const sitecache="hexycache";
const cacheItems=[
    '/index.html',
    '/css/main.css',
    '/css/all.min.css',
    '/Images/bg_light.png',
    '/Images/hexy.png',
    '/js/app.js',
    '/js/colors.js',
    '/js/dom.js',
    '/templates.json',
    "/webfonts/fa-brands-400.eot",
    "/webfonts/fa-brands-400.svg",
    "/webfonts/fa-brands-400.ttf",  
    "/webfonts/fa-brands-400.woff",
    "/webfonts/fa-brands-400.woff2",
    "/webfonts/fa-regular-400.eot",
    "/webfonts/fa-regular-400.svg",
    "/webfonts/fa-regular-400.ttf",
    "/webfonts/fa-regular-400.woff",
    "/webfonts/fa-regular-400.woff2",
    "/webfonts/fa-solid-900.eot",
    "/webfonts/fa-solid-900.svg",
    "/webfonts/fa-solid-900.ttf",
    "/webfonts/fa-solid-900.woff",
    "/webfonts/fa-solid-900.woff2",
    '/',
    '/index.html#random_page',
    '/index.html#templates_page',
    '/index.html#popular_page'
]
const errorCache=[
    '/index.html',
    '/css/main.css',
    '/css/all.min.css',
    '/Images/bg_light.png',
    '/Images/hexy.png',
    '/js/app.js',
    '/js/colors.js',
    '/js/dom.js',
    '/templates.json',
    "/webfonts/fa-brands-400.eot",
    "/webfonts/fa-brands-400.svg",
    "/webfonts/fa-brands-400.ttf",  
    "/webfonts/fa-brands-400.woff",
    "/webfonts/fa-brands-400.woff2",
    "/webfonts/fa-regular-400.eot",
    "/webfonts/fa-regular-400.svg",
    "/webfonts/fa-regular-400.ttf",
    "/webfonts/fa-regular-400.woff",
    "/webfonts/fa-regular-400.woff2",
    "/webfonts/fa-solid-900.eot",
    "/webfonts/fa-solid-900.svg",
    "/webfonts/fa-solid-900.ttf",
    "/webfonts/fa-solid-900.woff",
    "/webfonts/fa-solid-900.woff2",
]
//install service worker
self.addEventListener('install',evt=>{
    evt.waitUntil(
        caches.open(sitecache)
        .then(cache=>{
            return cache.addAll(cacheItems);
        })
        .catch(err=>{
            
        })
    );
});

self.addEventListener("activate",(evt)=>{
    console.log("Serive worker has been activated")
});
self.addEventListener('fetch',evt=>{
    evt.respondWith(
        caches.match(evt.request)
        .then(cacheRequest=>{
            return cacheRequest || fetch(evt.request);
        }).catch(error=>{
            console.log(error);
            return caches.match("index.html")
        })
    )
})


/*
class IndexDB{
    constructor(){}
    createDataBase(){}
    addColor(){}

    
    
    
    
    
    '/webfonts/*.svg',
    '/webfonts/*.woff',
    '/webfonts/*.woff2',
    '/webfonts/*.ttf',



}*/