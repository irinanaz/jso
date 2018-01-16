var express = require('express');
var app = express();
var path = require("path");
var url = require("url");

app.get('/*.htm*', function(req, res){
    /* TODO */ app.locals.joske = {voornaam: "Joske", naam: "Vermeulen"};
    res.sendFile( path.join(__dirname + url.parse(req.url).pathname));
});

var server = app.listen(1338, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port)
});