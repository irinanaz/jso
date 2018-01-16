var express = require('express');
var app = express();
var fs = require("fs");

app.get('/users', function (req, res) {
   fs.readFile( 'bestanden/users.json', 'utf8', function (err, data) { // file sturen als antw - json object
       console.log( data );
       res.end( data );
   }); // data w verstuurd als dat volledig gelezen wordt
});

app.get('/users/:id', function (req, res) { // :id dat is een index voor object die in users zit. users[i]
   fs.readFile( 'bestanden/users.json', 'utf8', function (err, data) {
       var users = JSON.parse(data);
       var user = users["user"+req.params.id];
       console.log(user);
       res.end(JSON.stringify(user));
   });
}); // bij oproep in .js :  lijn 12:   app.get('/users/:id'  .....
    // bij server zo: http://localhost:8083/users/2   (zonder :)

var server = app.listen(8083, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});

