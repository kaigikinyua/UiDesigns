//check if navigator is suported
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg)=>{
        console.log("Registered service worker")
    })
    .catch((err)=>{
        console.log("Service worker not registered")
    });
   /* navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations) {
         registration.unregister()
       } })
       */
}