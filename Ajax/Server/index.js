const express=require('express')
const app=express()
const debug=true;
app.get('/',(req,res)=>{
    var myjson={
        contacts:[
            {"name":"James May"},
            {"name":"Richard Hammond"},
            {"name":"Jeremy Clarkson"}
        ]
    }
    if (debug===true){
    	res.header("Access-Control-Allow-Origin", "*");
    }
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(myjson))
})
app.listen(4000,()=>{
    console.log("Server listening on port 4000")
})