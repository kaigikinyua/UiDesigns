socket=new WebSocket("ws://localhost:9000")
socket.onopen=function(){
    socket.send('Hello World')
}
socket.onmessage=function(s){
    alert("server replied with "+s.data)
}