var express = require("express");

app = express();

//-------routing
app.get("/", function (req, res) {
  res.send("hello world!!!");
});
app.post("/contact", function (req, res) {
  res.send("this is contact!!!");
});
app.put("/about", function (req, res) {
  res.send("this is about!!!");
});
app.delete("/terms", function (req, res) {
  res.send("this terms!!!");
});

//-----simple string response

app.get("/one",function(req,res){
    res.send("this is simple text response");
});

app.post("/two",function(req,res){
    res.end("this is simple text response");
})

//-----response status code

app.get("/three",function(req,res){
   res.status(200).end("ok");
});

app.listen(8000, function () {
  console.log("server running on port 8000");
});
