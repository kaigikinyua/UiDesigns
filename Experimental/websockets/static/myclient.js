var socket=io.connect("http://localhost:4000")
var username=""
function sendMessage(){
    var name=document.getElementById("name");
    var message=document.getElementById("message");
    username=name.value
    socket.emit('chat',{
        message:message.value,  
        name:name.value
    })
}

socket.on('chat',(data)=>{
    receiveMessage(data)
})
function receiveMessage(data){
    var messages=document.getElementById("messages")
    var chat=document.createElement("div")
    if(data.name==username){
        chat.classList.add("outgoing")
    }else{
        chat.classList.add("incoming")
    }
    chat.innerHTML="<h3 class='title'>"+data.name+"</h3>"+"<p>"+data.message+"</p>"
    messages.appendChild(chat)
}
