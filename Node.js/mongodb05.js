
// injecties geven geen groot probleem want alles wat naar mongo gaat wordt een string
//toonRestaurants({$gte:''});
//asyncroon dus instructies die hier komen worden parallel uitgevoerd:
console.log('-----------------------wat denke hiervan?--------------------');
// zie ook http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/

'use strict';

var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

function updateDB() {  //veld, oldData, newData
  mongoClient.connect(url, function (err, client) {
    console.log("Connected successfully to server");
    var db = client.db('test');
    var collection = db.collection('restaurants');
    collection.insertOne({borough : "Manhattan", cuisine : "Belgian", name : "Vella", restaurant_id : "41823332"}, function (err, docs) {
      console.log("Restaurant document(s) found:");
    //   docs.forEach(function (element) {
    // console.log('%s', element.name, element.cuisine, element.address ? element.address.street : "");
    //   });
    if(err) throw err;
    // if (docs.acknowledged==true){
		console.log(docs.ok  +" new record inserted successfully");	//It will console the number of rows updated
		//}//console.log(docs);
      client.close();
    });
  });
}

//updateDB('borough', 'Missing', 'Unknown');
updateDB()
console.log("********** wat denk je hiervan ? **********");

