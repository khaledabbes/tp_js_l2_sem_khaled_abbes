var express = require('express');
http=require('http');
//vf
 var app = express()

 .use(function(req,res,next){
    res.end('hello express');
 });
 http.createServer(app)
 .listen(3000);