/**  voor MongoDb 3+ */
/*
 * vooraf:  npm install mongodb
 */

'use strict';

var mongoClient = require('mongodb').MongoClient;

// zie ook  http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/

// Connection URL
var url = 'mongodb://localhost:27017';// dat moet overeenkomen met poort van mongodb
// 3T db 'test' --> server status --> localhost:27017

// Use connect method to connect to the server
mongoClient.connect(url, function (err, client) { // poort en machine, maar db nog niet.
    var db = client.db('test'); //bepalen van db bij client -welke we willen gebruiken
    console.log("Connected successfully to server");
    // Get the restaurants collection
    var collection = db.collection('restaurants');
    // Find all documents
    collection.find().toArray(function (err, docs) {  // node werkt asynchrone, 
        // als de array klaar is dan begint de werk met doc
        console.log("Restaurant document(s) found:");
        docs.forEach(function (element) {                            // korte if(?teken operator):
            console.log('%s (%s), %s', element.name, element.cuisine, element.address ? element.address.street : "");
        });
        client.close();
    });
});