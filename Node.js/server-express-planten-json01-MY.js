

var express = require('express');
var app = express();


function readDB(row, callback) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'deschop',
		port: 3306
	});

	connection.connect();  // open connectie
	connection.query('select * from ??',  // select plantennaam from planten;
		row, function (err, result) {
			if (err) {
				callback(err, result);

			} else {
				callback(null, result);
			}connection.end();
		});
	
}


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));


app.all('/*', function (req, res, next) {  // all voor alle http methodes
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// var path = require ("path");
// var url = require ("url");
app.get('toonJSON01.html', function(req, res) {
	res.sendFile(__dirname + "/toonJSON01.html");
});

app.get('', function(req, res) {
  var row = ['planten']; 
  readDB(row, function (err, rows) {  // eigen functie - zie boven. met callback fie als parameter.
	  if (err) {
	  	console.log('Error while performing query.');
      console.log(err);
      res.end(JSON.stringify(err));
	  }
	  else {
	  	var result = JSON.stringify(rows);
      	console.log(result);
      	res.end(result);
	  }
    });
	  
	  
});










var server = app.listen(1337, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
});