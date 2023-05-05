var express = require("express");
var multer=require('multer');

var app = express();

//---fileupload

var storage=multer.diskStorage({
    destination:function(req,file,callback){
      callback(null,"./uploads")
    },
    filename:function(req,file,callback){
      callback(null,file.originalname)
    },
  });
  
  var upload=multer({storage:storage}).single("myfile");
  
  app.post("/upload", function (req, res) {
    upload(req,res,function(error){
      if(error){
        
        res.send(error);
      }else{
        res.send("upload successful");
      }
    })
  });

  app.listen(8001, function () {
    console.log("server running on port 8001");
  });