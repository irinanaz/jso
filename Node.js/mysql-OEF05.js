

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/mysql-oef02.html', function(req, res) {
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
	connection.query('select * from ??',
		row, function (err, result) {
			if (err) {
				callback(err, result);

			} else {
				callback(null, result);
			}connection.end();
		});
	
}







var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
});