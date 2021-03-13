function addLoadingScreen(){
    console.log('loadingScreen')
    var template=`
    <div class="loading">
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
        <div class="circ"></div>
    </div>
    `
    var body=document.querySelector('body')
    body.style.overflow="hidden"
    var l=document.createElement('section')
    l.classList.add('loading')
    l.innerHTML=template
    body.appendChild(l)
    
}
function removeLoadingScreen(){
    var l=document.querySelector('section.loading')
    var body=document.querySelector('body')
    body.removeChild(l)
    body.style.overflowY="scroll"
}
addLoadingScreen()
window.onload=()=>{
    setTimeout(()=>{removeLoadingScreen()},3000)
}