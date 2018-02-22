
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
	connection.query('INSERT INTO user (FIRSTNAME, LASTNAME, USERNAME, WACHTWOORD) values (?,?,?,?)',
		row, function (err, result) {
			if (err) {
				callback(err, result);

			} else {
				callback(null, result);
			}
			connection.end();
		});
} 
function validatieUsernaam(newusernaam, callback) {
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
	connection.query('select * from user where username = ?',
        newusernaam, function (err, result) {
			if (err) {
				callback(err, result);

			} else {
				callback(null, result);
			}
			connection.end();
		});
} 
function showAll(newusernaam, callback) {
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
	connection.query('select ?? from user',
        row, function (err, result) {
			if (err) {
				callback(err, result);

			} else {
				callback(null, result);
			}
			connection.end();
		});
} 
function loginUser(rowLogin, callback) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'takenlijst',
		port: 3306
	});

    connection.connect();
    // to check a usernaam en paswoord in db:
	connection.query('select * from user where username = ?',
        rowLogin, function (err, result) {
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
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    // res.header("Access-Control-Allow-Credentials", "true");
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

app.get('/getAll', function (req, res) {

    row = ['username'];
        
    showAll(row, function(err, result) {
            if (err) {
                console.log('Error while performing query.');
                console.log(err);
                res.send("Unauthorised");
            }
            else {
                console.log('Gebruikers', result);
                console.log("%d rows found", result.length);
                res.send({ status: 200 , result});
                
            }
    });
});

app.post('/authenticate', function (req, res) {
    var logUser = {};
    if (req.body.postman){
        //newUser.firstName = req.body.firstName;
        logUser = req.body;   
    }
    else{
     
     logUser = JSON.parse(Object.keys(req.body)[0]);
    }
    
    let body = {};
    var userUsername = logUser.username;
    var userPsw = logUser.password;

    rowLogin = [ userUsername ];
    loginUser(rowLogin, function(err, result) {
        if (err) {
            console.log('Error while performing query.');
            console.log(err);
            res.send(" NO CONNECTION ");
        } else {
            if (!result.length){
                console.log( ' Verkeerde paswoord ');
                res.send('User is not registered');  
                // res.send({ status: 200 , message: userUsername + " is not registered."});
            } else {
                console.log( result[0]);
                console.log( result.length +' user gevonden in db: ' + result[0].USERNAME, result[0].FIRSTNAME,result[0].LASTNAME, result[0].WACHTWOORD);
                if (userUsername === result[0].USERNAME && userPsw === result[0].WACHTWOORD){
                    console.log('Login is correct: ', userUsername, userPsw);
                    
                    body = {
                        id: result[0].ID,
                        username: result[0].USERNAME,
                        firstName: result[0].FIRSTNAME,
                        lastName: result[0].LASTNAME,
                        token: 'fake-jwt-token'
                    };
                    res.send({ status: 200 , body: body});
                } else {
                    // body = {message :'Password is incorrect: '};
                    console.log('Password is incorrect: ');
                    res.send('Password is incorrect: ');
                }
            }
        }
    });
    // body = { token :'User is not registered'};
    //  res.send('User is not registered');  
});
app.post('/addUser', function (req, res) {
    var newUser = {};
    if (req.body.postman){
        //newUser.firstName = req.body.firstName;
        newUser = req.body;

        
    }
    else{
     newUser = JSON.parse(Object.keys(req.body)[0]);
    }
    console.log(newUser);
    // console.log(JSON.parse(Object.keys(req.body)[0]));
    var userFirstname = newUser.firstName;
    var userLastname = newUser.lastName;
    var userUsername = newUser.username;
    var userPsw = newUser.password;
    // id wordt door sql generated automatically
    
    
    newusernaam = [userUsername];
    row = [userFirstname,userLastname,userUsername,userPsw];

    validatieUsernaam (newusernaam, function(err, result) {
        if (err) {
            console.log('Error while performing search query.');
            console.log(err);
            res.send("Error while performing search query.");
        }
        else {
            console.log("Found in database: " + result.length);
            if (!result.length){
                addRecord(row, function(err, result) {
                    if (err) {
                        console.log('Error while performing query.');
                        console.log(err);
                        res.send("User was NOT added");
                    }
                    else {
                        console.log('Use was added: ', userFirstname, userLastname, userUsername, userPsw);
                        console.log("%d rows affected", result.returnedRows);
                        res.send({ status: 200 ,
                            message: result.returnedRows + " row affected"});
                        
                    }
                });
            }
            else{

                res.send('Username "' + userUsername + '" is already taken');
            }
        }
    });
    
});

var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});


