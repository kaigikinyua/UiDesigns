const express=require("express")
const app=express();
var socket=require("socket.io");

app.use('/',express.static("./static"))
app.set('view engine','ejs')

app.get("/",(req,res)=>{
    res.render("index") 
})

var server=app.listen(4000,()=>{
    console.log("Application running on port 4000")
});

var io=socket(server)
io.on('connection',function(socket){
    //console.log(socket.id+" made a connection")
    socket.on('chat',(data)=>{
        console.log(data)
        io.sockets.emit('chat',data);
    });
});