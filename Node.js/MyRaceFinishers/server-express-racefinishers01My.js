var mongoClient = require('mongodb').MongoClient;
var app = require('express')();
var fs = require("fs");
// Connection URL naar DB
// var url = 'mongodb://localhost:27017';

// enable cross domain calls (CORS = cross origin resource sharing)
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// parser voor post methode:
//var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({
//   extended: true
//}));



//app.get('/raceFinishers01My.html', verwerkRequestVoorRestaurants);
app.get('/raceFinishersJson', function(req, res) {
	fs.readFile( 'raceFinishers.json', 'utf8', function (err, data) { 
        console.log( data );
        res.end( data );
    });
});

// app.get('/raceFinishers01My.html', function(req, res) {
	// res.sendFile(__dirname + "/raceFinishers01My.html");
// });

// app.listen(8888);

var server = app.listen(1337, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port)
});


 