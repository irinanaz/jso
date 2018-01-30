var mongoClient = require('mongodb').MongoClient;
var app = require('express')();
var fs = require("fs");
// Connection URL naar DB
var url = 'mongodb://localhost:27017';

// enable cross domain calls (CORS = cross origin resource sharing)
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// parser voor post methode:
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));






app.post('/addRunner', function (req, res) {
    fs.readFile( 'raceFinishers.json', 'utf8', function (err, data) { 
        console.log( data );
        console.log('%s %s wordt toegevoegd', req.body.txtFirstName, req.body.txtLastName);
        res.end( data );
    });
    res.end('{"message" : "Added Successfully", "status" : 200}');
});


app.post('/racerNew', insertRacersDB);
//app.post('/rasersInsert', insertRacersDB);
app.get('/racersVrouwen', sorteerRacersVDB);
app.get('/racersMannen', sorteerRacersMDB);
app.get('/racers', sorteerRacersDB);

app.get('/raceFinishersJson', function(req, res) {
	fs.readFile( 'raceFinishers.json', 'utf8', function (err, data) { 
        console.log( data );
        res.end( data );
    });
});

app.get('/racersort01My.html', function(req, res) {
	res.sendFile(__dirname + "/racersort01My.html");
});

app.listen(8888);

var server = app.listen(1337, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port)
});

function verwerkRacersDB(request, response) {
    mongoClient.connect(url, function (err, client) {
        console.log("Connected successfully to server of RacersDB");
        var db = client.db('test');
        var collection = db.collection('racers');
        collection.find({}).project({ _id: 0 }).toArray(function (err, docs) {
            console.log("Racers document(s) found");
            response.send(JSON.stringify(docs));
            client.close();
        });
    });
}

function insertRacersDB(request, response) {  //veld, oldData, newData
    var fnaam = request.body.txtName;
    var fvnaam = request.body.txtFirstName;
    var fgender = request.body.idGender;
    var furen = request.body.nmbHours;
    var fmin =request.body.nmbMinutes;
    
    mongoClient.connect(url, function (err, client) {
      console.log("Connected successfully to server of RacersDB: NEW");
      var db = client.db('test');
      var collection = db.collection('racers');
      collection.insertOne({voornaam : fvnaam, naam : fnaam, uren : furen, minuten : fmin, gender: fgender}, function (err, docs) {
        console.log("Racers document(s) added:");
      if(err) throw err;
      // if (docs.acknowledged==true){
          console.log(docs.n  +" new record inserted successfully");	//It will console the number of rows updated
          //}//console.log(docs);
        client.close();
        response.end('berichtje');
      });
    });
  }
// function refreshForm(request,response){

// }




function sorteerRacersDB(request, response) {
    mongoClient.connect(url, function (err, client) {
        console.log("Connected successfully to server of RacersDB: ALL");
        var db = client.db('test');
        var collection = db.collection('racers');
        collection.find({}).project({ _id: 0 }).sort({'uren':1, 'minuten':1}).toArray(function (err, docs) {
            console.log("Racers document(s) found");
            response.send(JSON.stringify(docs));
            client.close();
            response.end('{"message" : "Sorted Successfully", "status" : 200}');
        });
    });
}
function sorteerRacersMDB(request, response) {
    mongoClient.connect(url, function (err, client) {
        console.log("Connected successfully to server of RacersDB: Mannen");
        var db = client.db('test');
        var collection = db.collection('racers');
        collection.find({'gender':'man'}).project({ _id: 0 }).sort({'uren':1, 'minuten':1}).toArray(function (err, docs) {
            console.log("Racers document(s) found");
            response.send(JSON.stringify(docs));
            client.close();
            response.end('{"message" : "Sorted Successfully", "status" : 200}');
        });
    });
}
function sorteerRacersVDB(request, response) {
    mongoClient.connect(url, function (err, client) {
        console.log("Connected successfully to server of RacersDB: Vrouwen");
        var db = client.db('test');
        var collection = db.collection('racers');
        collection.find({'gender':'woman'}).project({ _id: 0 }).sort({'uren':1, 'minuten':1}).toArray(function (err, docs) {
            console.log("Racers document(s) found");
            response.send(JSON.stringify(docs));
            client.close();
            response.end('{"message" : "Sorted Successfully", "status" : 200}');
        });
    });
}

