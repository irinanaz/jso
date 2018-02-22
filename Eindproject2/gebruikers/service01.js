
var toetsenbord = require('readline-sync');

var express = require('express');
var app = express();
var path = require("path");
var url = require("url");
var bodyParser = require('body-parser');

// connection met SQL data bank
function addRecord(row, callback) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'takenlijst',
		port: 3306
	});

    connection.connect();
    // to add a new user :
	connection.query('INSERT INTO user (ID,FIRSTNAME, LASTNAME, USERNAME, WACHTWOORD) values (?,?,?,?,?)',
		row, function (err, result) {
			if (err) {
				callback(err, result);

			} else {
				callback(null, result);
			}
			connection.end();
		});
} 

// enable cross domain calls (CORS = cross origin resource sharing)
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// ??
app.get(['/*.htm*', '/*.css', '/scripts/*.js'], function (req, res) {
    res.sendFile(path.join(__dirname + url.parse(req.url).pathname));
});
// ??



// nodig om post data (geg die via form met post verstuurd worden) op te vragen:

app.use(bodyParser.urlencoded({ extended: true }));
// request verwerking 
app.post('/addUser', function (req, res) {
    var userFirstname = req.body.firstName;
    var userLastname = req.body.lastName;
    var userUsername = req.body.username;
    var userPsw = req.body.password;
    var userID = 1;
    
    console.log('Gebruiker wordt toegevoegd: ', userFirstname, userLastname, userUsername,userPsw);
    row = [userID, userFirstname,userLastname,userUsername,userPsw];
    addRecord(row, function(err, result) {
        if (err) {
            console.log('Error while performing query.');
            console.log(err);
            res.send("lijn NIET toegevoegd");
        }
        else {
            console.log("%d rows affected", result.affectedRows);
            res.send( result.affectedRows + " rows affected");
        }
    });
});

var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});


