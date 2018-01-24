var mongoClient = require('mongodb').MongoClient;
var app = require('express')();

// Connection URL
var url = 'mongodb://localhost:27017';

// enable cross domain calls (CORS = cross origin resource sharing)
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// parser voor post methode:
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));


//app.post('/process_keuken', verwerkRequestVoorEenKeukenForm);
	
 //   var keukenKeuze = req.body.idKeukenSelect;


app.get('/restaurants/keukens/:id', verwerkRequestVoorEenKeuken);
app.get('/restaurants/keukens', verwerkRequestVoorKeukens);
app.get('/restaurants', verwerkRequestVoorRestaurants);

app.get('/restaurants05My.html', function(req, res) {
	res.sendFile(__dirname + "/restaurants05My.html");
});

app.listen(8888);

var server = app.listen(1337, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port)
});

function verwerkRequestVoorRestaurants(request, response) {
    mongoClient.connect(url, function (err, client) {
        console.log("Connected successfully to server");
        var db = client.db('test');
        var collection = db.collection('restaurants');
        collection.find({}).project({ name: 1, address: 1, cuisine: 1, borough:1, _id: 0 }).toArray(function (err, docs) {
            console.log("Restaurant document(s) found");
            response.send(JSON.stringify(docs));
            client.close();
        });
    });
}
 
function verwerkRequestVoorEenKeukenForm(request, response) {
    //var keuken='Italian';
    var keukenKeuze = request.body.idKeukenSelect;
    mongoClient.connect(url, function (err, client) {
       
        
        console.log("Connected successfully to server");
        var db = client.db('test');
        var collection = db.collection('restaurants');
        collection.find({cuisine:keuken}).project({ name: 1, address: 1, cuisine: 1, borough:1, _id: 0 }).toArray(function (err, docs) {
            console.log("Restaurant document(s) found");
            response.send(JSON.stringify(docs));
            client.close();
        });
    });
}

function verwerkRequestVoorEenKeuken(request, response) {
    //var keuken='Italian';
    var keuken =request.params.id;
    mongoClient.connect(url, function (err, client) {
       
        
        console.log("Connected successfully to server");
        var db = client.db('test');
        var collection = db.collection('restaurants');
        collection.find({cuisine:keuken}).project({ name: 1, address: 1, cuisine: 1, borough:1, _id: 0 }).toArray(function (err, docs) {
            console.log("Restaurant document(s) found");
            response.send(JSON.stringify(docs));
            client.close();
        });
    });
}
function verwerkRequestVoorKeukens(request, response) {
    mongoClient.connect(url, function (err, client) {
        // var pathKeuken = url.parse(request.url).pathKeuken.substring(1);
        // var pathKeuken = require("path");
        console.log("Connected successfully to server");
        var db = client.db('test');
        var collection = db.collection('restaurants');
        collection.distinct("cuisine",function (err, docs) {
            console.log("Restaurant document(s) found");
            response.send(JSON.stringify(docs));
            client.close();
        });
    });
}
