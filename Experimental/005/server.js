const express=require('express');
const app=express();

app.use('/webfonts',express.static('webfonts'));

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})
app.listen(4000,()=>{
    console.log('Hexy running on port 4000')
})