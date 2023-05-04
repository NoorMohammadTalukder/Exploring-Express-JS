var express=require('express');

app=express();

app.get("/",function(req,res){
    res.send("hello world!!!");
})

app.listen(8000,function(){
    console.log("server running on port 8000");
})