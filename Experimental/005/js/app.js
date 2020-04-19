if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg)=>{
        console.log("Registered service worker")
    })
    .catch((err)=>{
        console.log("Service worker not registered")
    });
}