
var toetsenbord = require('readline-sync');

var express = require('express');
var app = express();
var path = require("path");
var url = require("url");
var mysql = require('mysql');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


// connection met SQL data bank
function addRecord(row, callback) {
	
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'takenlijst',
        port: 3306,
        
	});

    connection.connect();
    // to add a new user :
	connection.query('INSERT INTO users (FIRSTNAME, LASTNAME, USERNAME, WACHTWOORD) values (?,?,?,?)',
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
	
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'takenlijst',
		port: 3306
	});

    connection.connect();
    // to add a new user :
	connection.query('select * from users where username = ?',
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
	
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'takenlijst',
		port: 3306
	});

    connection.connect();
    // to add a new user :
	connection.query('select ?? from users',
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
	connection.query('select * from users where username = ?',
        rowLogin, function (err, result) {
			if (err) {
				callback(err, result);

			} else {
				callback(null, result);
			}
			connection.end();
		});
} 
function maakConnectie() {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'takenlijst',
        port: 3306,
        multipleStatements: true
    });
    connection.connect();
    return connection;
}
// enable cross domain calls (CORS)
// 3 headers - ok 
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    // res.header("Access-Control-Allow-Credentials", "true");
    next();
});
// ??
app.get(['/*.htm*', '/*.css', '/scripts/*.js','/*.js'], function (req, res) {
    res.sendFile(path.join(__dirname + url.parse(req.url).pathname));
});
// ??

// app.get('/getAll', function (req, res) {
//     row = ['username'];
//     showAll(row, function(err, result) {
//             if (err) {
//                 console.log('Error while performing query.');
//                 console.log(err);
//                 res.send("Unauthorised");
//             }
//             else {
//                 console.log('Gebruikers', result);
//                 console.log("%d rows found", result.length);
//                 res.send({ status: 200 , result});
//             }
//     });
// });

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
                console.log ( ' User is not registered');
                res.send ('User is not registered');  
                // res.send({ status: 200 , message: userUsername + " is not registered."});
            } else {
                // console.log( result[0]);
                console.log( result.length + 'user gevonden in db ');
                if (userUsername === result[0].USERNAME && userPsw === result[0].WACHTWOORD){
                    console.log('User is logged in: ', userUsername);
                    
                    body = {
                        id: result[0].ID,
                        username: result[0].USERNAME,
                        firstName: result[0].FIRSTNAME,
                        lastName: result[0].LASTNAME,
                        token: 'fake-jwt-token'
                    };
                    res.send({ status: 200 , body: body});
                } else {
                   
                    console.log('Password is incorrect: ');
                    res.send('Password is incorrect: ');
                }
            }
        }
    });
     
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

// takenlijst gets --------------------------------------------------------------------
app.get(['/categorienamen'], function (req, res) {
    var connection = maakConnectie();
    connection.query(
        "SELECT CATNAME,CATID,ID FROM CATEGORIE ORDER BY CATNAME ;",
        function (err, rows, fields) {
            if (!err) {
                var result = [];
                for (var i = 0; i < rows.length; i++) {
                    result.push({ CATNAME: rows[i].CATNAME, CATID: rows[i].CATID, ID: rows[i].ID });
                }
                res.send({ status: 200, result: result });
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.')
                console.log(err.message)
            }
            connection.end();
        });
});

app.post('/addCat/:userid', function (req, res) {
    var identifiers = [];
    identifiers.push(req.params.userid);            // ID van IRINA ipv 1 OK
    identifiers.push(req.body.catTitel);
    identifiers.push(req.body.catLijst1);

    var sqlStmt = "INSERT INTO categorie (ID, CATNAME) VALUES (?,?);";
    if (req.body.catLijst1 != "Hoofdcategorie") {
        sqlStmt += "INSERT INTO subcategorie VALUES(LAST_INSERT_ID(),?);"
    }
    else {
        sqlStmt += "INSERT INTO subcategorie VALUES(LAST_INSERT_ID(),null);"
    }

    var connection = maakConnectie();
    connection.query(sqlStmt, identifiers,
        function (err, rows, fields) {
            if (!err) {
                connection.query(
                    "SELECT CATNAME, CATID FROM CATEGORIE WHERE ID = ? ORDER BY CATNAME ;",
                    [req.params.userid],            // ID van IRINA ipv 1
                    function (err, rows, fields) {
                        if (!err) {
                            var result = [];
                            for (var i = 0; i < rows.length; i++) {
                                result.push({ CATNAME: rows[i].CATNAME, CATID: rows[i].CATID });
                            }
                            res.send({ status: 200, result: result });
                        }
                        else {
                            console.log('Error while performing query.');
                            res.send('Error while performing query.')
                            console.log(err.message)
                        }
                    });
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.')
                console.log(err.message)
            }
            connection.end();
        });
});
app.post('/addTaak', function (req, res) {
    var identifiers = [];
    identifiers.push(req.body.catLijst2);
    identifiers.push(req.body.taakTitel);
    identifiers.push(req.body.startdat);
    identifiers.push(req.body.einddat);
    identifiers.push(req.body.taakOmschr);
    var connection = maakConnectie();
    connection.query(
        "INSERT INTO taak (PARENTCATIDT, TITEL, STARTDAT, EINDDAT, TAAKOMSCHR) VALUES (?,?,?,?,?)", identifiers,
        function (err, rows, fields) {
            if (!err) {
                var result = JSON.stringify(rows);
                res.send({ status: 200, message: "taak toegevoegd" });
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.');
                console.log(err.message);
            }
            connection.end();
        });
});

app.get(['/catWeergeven'], function (req, res) {
    var connection = maakConnectie();
    connection.query(
        "SELECT c.ID, c.CATID, c.CATNAME, s.PARENTCATIDC, t.TAAKID, t.PARENTCATIDT, t.TITEL, t.STARTDAT, t.EINDDAT, t.TAAKOMSCHR FROM CATEGORIE c LEFT OUTER JOIN SUBCATEGORIE s ON s.SUBCATID = c.CATID LEFT OUTER JOIN TAAK t ON t.PARENTCATIDT = c.CATID ORDER BY ID,CATNAME;",
        function (err, rows, fields) {
            if (!err) {
                var result = [];
                for (var i = 0; i < rows.length; i++) {
                    result.push({ ID: rows[i].ID, CATID: rows[i].CATID, CATNAME: rows[i].CATNAME, PARENTCATIDC: rows[i].PARENTCATIDC, TAAKID: rows[i].TAAKID, PARENTCATIDT: rows[i].PARENTCATIDT, TITEL: rows[i].TITEL, STARTDAT: rows[i].STARTDAT, EINDDAT: rows[i].EINDDAT, TAAKOMSCHR: rows[i].TAAKOMSCHR });
                }
                res.send({ status: 200, result: result });
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.')
                console.log(err.message)
            }
            connection.end();
        });
});


app.post('/delTaak', function (req, res) {
    var identifier = req.body.idT;
    var connection = maakConnectie();
    connection.query(
        "DELETE FROM TAAK WHERE TAAKID = ?;", identifier,
        function (err, rows, fields) {
            if (!err) {
                var result = JSON.stringify(rows);
                res.send({ status: 200, message: "taak verwijderd" });
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.');
                console.log(err.message);
            }
            connection.end();
        });
});

app.post('/delCat', function (req, res) {
    var identifier = req.body.idC;
    var identifiers = [req.body.idC, req.body.idC];
    var connection = maakConnectie();
    connection.query(
        "DELETE FROM TAAK WHERE PARENTCATIDT= ?;", identifier,
        function (err, rows, fields) {
            if (!err) {
                connection.query(
                    "DELETE FROM CATEGORIE WHERE CATID=?; DELETE FROM CATEGORIE WHERE CATID NOT IN  (SELECT SUBCATID FROM SUBCATEGORIE); DELETE FROM SUBCATEGORIE WHERE SUBCATID=?", identifiers,
                    function (err, rows, fields) {
                        if (!err) {
                            var result = JSON.stringify(rows);
                            res.send({ status: 200, message: "categorie verwijderd" });
                        }
                        else {
                            console.log('Error while performing query Cat.');
                            res.send('Error while performing query.');
                            console.log(err.message);
                        }
                    });
            }
            else {
                console.log('Error while performing query Taak.');
                res.send('Error while performing query.');
                console.log(err.message);
            }
            connection.end();
        });
});

app.post('/UpdateTaak', function (req, res) {
    var identifier = [req.body.taakname, req.body.taakomschr, req.body.startdatum, req.body.einddatum, req.body.idT];
    var connection = maakConnectie();
    connection.query(
        "UPDATE TAAK SET TITEL = ?,TAAKOMSCHR = ?, STARTDAT=?, EINDDAT=? WHERE TAAKID= ?;", identifier,
        function (err, rows, fields) {
            if (!err) {
                var result = JSON.stringify(rows);
                res.send({ status: 200, message: "taak updaten" });
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.');
                console.log(err.message);
            }
            connection.end();
        });
});

app.post('/UpdateCat', function (req, res) {
    var identifier = [req.body.catname, req.body.idC];
    var connection = maakConnectie();
    connection.query(
        "UPDATE CATEGORIE SET CATNAME = ? WHERE CATID= ?;", identifier,
        function (err, rows, fields) {
            if (!err) {
                var result = JSON.stringify(rows);
                res.send({ status: 200, message: "categorie updaten" });
            }
            else {
                console.log('Error while performing query.');
                res.send('Error while performing query.');
                console.log(err.message);
            }
            connection.end();
        });
});
// tekenlijst gets - end --------------------------------------------------------------


// mijnenveger gets ------------------------------------------------------------------

app.get('/haalEigenRecords', function(req, res) {
    console.log( "haaleigenrecords: ");
	console.log(req.query.name);
	var connection = maakConnectie();
	var identifiers = req.query.name;
	connection.query('SELECT * FROM scores WHERE speler1="'+identifiers+'" or speler2="Erwin" or speler3="Erwin"', identifiers, function (err, rows, fields) {
    if (!err) {
        var result = JSON.stringify(rows);console.log(result);
        res.send(result);}
    else {console.log('Error while performing query her.');}
    connection.end();
    });
});

app.get('/haalRecords', function(req, res) {
    console.log( "haal records: ");
	console.log(req.query.id);
	var connection = maakConnectie();
	var identifiers = req.query.id;
	connection.query('SELECT * FROM scores WHERE id='+identifiers, function (err, rows, fields) {
    if (!err) { console.log('Top3: '); console.log(rows);
        var result = JSON.stringify(rows); console.log('Top3: '); console.log(result);
        res.send(result);}
    else {console.log('Error while performing query hr.');}
    connection.end();
    });
});


app.post('/zetScore', function(req, res) {
	console.log(req.body.name);
	console.log(req.body.id);
	console.log(req.body.score);
	var naam = req.body.name;
	var id= req.body.id;
    var score= req.body.score;
    var connection = maakConnectie();
    connection.query('SELECT * FROM scores WHERE id='+id, function (err, rows, fields) {
        if (!err && rows.length==0) {console.log('insert');
            connection.query('INSERT INTO scores (id,speler1,score1) VALUES ('+id+',"'+naam+'",'+score+')', function (err, rows, fields) {
            if (!err) {res.send("inserted");}
            else {console.log('Error while performing insert.');}
            connection.end();
            });
        }
        else if (!err && rows.length>0) {console.log('update');
            if(score<rows[0].score1){
                connection.query('UPDATE scores SET speler3="'+rows[0].speler2+'", score3='+rows[0].score2+', speler2="'+rows[0].speler1+'", score2='+rows[0].score1+', speler1="'+naam+'", score1='+score+' WHERE id='+id, function (err, rows, fields) {
                if (!err) {res.send("updated 1e");}
                else {console.log('Error while performing update 1e.');}
                connection.end();
            }); }
            else if(score<rows[0].score2){
                connection.query('UPDATE scores SET speler3="'+rows[0].speler2+'", score3='+rows[0].score2+', speler2="'+naam+'", score2='+score+' WHERE id='+id, function (err, rows, fields) {
                if (!err) {res.send("updated 2e");}
                else {console.log('Error while performing update 2e.');}
                connection.end();
            }); }
            else if(score<rows[0].score3){
                connection.query('UPDATE scores SET speler3="'+naam+'", score3='+score+' WHERE id='+id, function (err, rows, fields) {
                if (!err) {res.send("updated 3e");}
                else {console.log('Error while performing update 3e.');}
                connection.end();
            }); }
            else{res.send("geen update");}
            
        }    
        else {console.log('Error while performing select.');}
        
        });
});



// mijnenveger gets - end --------------------------------------------------------------
var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});

// app.listen(2001);  - TOM


