/**  voor MongoDb 3+ */
/*
 * vooraf:  npm install mongodb
 */

// injecties geven geen groot probleem want alles wat naar mongo gaat wordt een string
//toonRestaurants({$gte:''});
//asyncroon dus instructies die hier komen worden parallel uitgevoerd:
console.log('-----------------------wat denke hiervan?--------------------');
// zie ook http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/

'use strict';

var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

function toonRestaurants(cuisine) {
  mongoClient.connect(url, function (err, client) {
    console.log("Connected successfully to server");
    var db = client.db('test');
    var collection = db.collection('restaurants');
    collection.find({ cuisine: cuisine }).toArray(function (err, docs) {
      console.log("Restaurant document(s) found:");
      docs.forEach(function (element) {
        console.log('%s (%s), %s', element.name, element.cuisine, element.address ? element.address.street : "");
      });
      client.close();
    });
  });
}

toonRestaurants("Chinese");

console.log("********** wat denk je hiervan ? **********");
toonRestaurants({$gte:""});   // NoSQL injection
