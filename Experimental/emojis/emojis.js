var message=""

var MessageBox=document.getElementById('message')
MessageBox.addEventListener('keyup',(e)=>{
    message=MessageBox.value
})

function sendMessage(){
    var messages=document.getElementById('messages')
    var bubble=document.createElement("div")
    bubble.classList.add('sender')
    bubble.innerHTML=message
    messages.appendChild(bubble)
}

function addEmoji(unicode){
    message=message+" "+unicode
    var msgBox=document.getElementById('message')
    msgBox.value=message
}

function showElement(id){
    var elm=document.getElementById(id)
    elm.classList.remove("hidden")
    elm.classList.add('show')
}
function hideElement(id){
    var elm=document.getElementById(id)
    elm.classList.remove('show')
    elm.classList.add("hidden")
}