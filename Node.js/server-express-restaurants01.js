<<<<<<< HEAD

var express = require('express');
var app = express();

function getRecords(callback) {
    var result = {};
    var mongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017';

        mongoClient.connect(url, function (err, client) { 
            var db = client.db('test'); 
            console.log("Connected successfully to server");
            var collection = db.collection('restaurants');
            collection.find({}).project({'name':1,'address':1,'borough':1,'cuisine':1,'_id':0}).toArray(function (err, docs) {  
                console.log("Restaurant document(s) found:");
                    if (err) {
                        callback(err, {});
            
                    } else {
                        callback(null, docs);
                    }
                
                client.close();
                
            });
        });
    

}

=======
var mongoClient = require('mongodb').MongoClient;
var app = require('express')();

// Connection URL
var url = 'mongodb://localhost:27017';

// enable cross domain calls (CORS = cross origin resource sharing)
>>>>>>> ead5ce85740258fc5938160d9b024de8ab675876
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

<<<<<<< HEAD
app.get('/restaurants.json', function (req, res) {
    console.log('request received');
    getRecords(function (err, docs) {
        var result;
        if (err) {
            console.log('Error while performing query.');
            result = {};
        }
        else {
            console.log("Sending data to client:");
            result = docs;
        }
        

        res.end(JSON.stringify({ data: result }));
    });
});

var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});
/*********************************************************************** */
// var express = require('express');
// var app = express();

// 'use strict';
// var mongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017';

// function toonRestaurants(keuken) {
//     // Use connect method to connect to the server
//     mongoClient.connect(url, function (err, client) { // poort en machine, maar db nog niet.
//         var db = client.db('test'); //bepalen van db bij client -welke we willen gebruiken
//         console.log("Connected successfully to server");
//         // Get the restaurants collection
//         var collection = db.collection('restaurants');
//         // Find all documents
//         collection.find({ cuisine: keuken }).toArray(function (err, docs) {  // node werkt asynchrone, 
//             // als de array klaar is dan begint de werk met doc
//             console.log("Restaurant document(s) found:");
//             docs.forEach(function (element) {
//                 console.log('%s (%s), %s', element.name, element.cuisine, element.address ? element.address.street : "");

//             });
//             var jsonDB = JSON.stringify({ data: docs });
//             client.close();//JSON.stringify({ data: docs })
//             return jsonDB;
//         });
//     });
// }


// app.get('/restaurant', function (req, res) {
//     console.log('request received');
//     var jsonDB = toonRestaurants('Italian');
//     res.end("ok");
// });

// var server = app.listen(1337, function () {
//     var host = server.address().address;
//     var port = server.address().port;

//     console.log("Example app listening at http://%s:%s", host, port)
// });
=======
// GET /restaurants
app.get('/restaurants', verwerkRequestVoorRestaurants);
app.listen(8888);

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
>>>>>>> ead5ce85740258fc5938160d9b024de8ab675876
