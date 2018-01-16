/**  voor MongoDb 3+ */
/*
 * vooraf:  npm install mongodb
 */

'use strict';

var mongoClient = require('mongodb').MongoClient;

// zie ook  http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/

// Connection URL
var url = 'mongodb://localhost:27017';

// Use connect method to connect to the server
mongoClient.connect(url, function (err, client) {
    var db = client.db('test');
    console.log("Connected successfully to server");
    // Get the restaurants collection
    var collection = db.collection('restaurants');
    // Find all documents
    collection.find().toArray(function (err, docs) {
        console.log("Restaurant document(s) found:");
        docs.forEach(function (element) {
            console.log('%s (%s), %s', element.name, element.cuisine, element.address ? element.address.street : "");
        });
        client.close();
    });
});