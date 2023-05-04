var express=require('express');

app=express();

app.get("/",function(req,res){
    res.send("hello world!!!");
})
app.post("/contact",function(req,res){
    res.send("this is contact!!!");
})
app.put("/about",function(req,res){
    res.send("this is about!!!");
})
app.delete("/terms",function(req,res){
    res.send("this terms!!!");
})

app.listen(8000,function(){
    console.log("server running on port 8000");
})