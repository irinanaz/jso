use test;

db.restaurants.find();

db.restaurants.find({"cuisine": 'Italian'});

// volgens de waarde uit ingebed document - hier "" zijn verplicht :
db.restaurants.find({"address.street": "2 Avenue"});

db.restaurants.find({"grades.score" : 20});
db.restaurants.find({"grades.score" : {$gt: 20} });
db.restaurants.find({"grades.score" : {$ne: 20} });

db.restaurants.find({ "name": /^b/i});

db.restaurants.find( {"cuisine": {$in: ["Italian", "Chinese", "French"] } });

db.restaurants.find( {$or: [{"cuisine":"Italian"}, {"address.zipcode" :"10075"} ]  });
db.restaurants.find( {$and: [{"cuisine":"Italian"}, {"address.zipcode" :"10075"} ]  });
//And kan ook simpeler:
db.restaurants.find( {"cuisine":"Italian" , "address.zipcode" :"10075"} );

db.restaurants.find().sort({"name": -1});  // 1 asc, -1 desc

// alle pizza restaurants gesoorteerd op buurt (borough):
db.restaurants.find({"cuisine":"Pizza"}).sort({"borough":1});
// extra sorteren per name binnen buurt:
db.restaurants.find({"cuisine":"Pizza"}).sort({"borough":1,"name":1});

// om bepaalde velden te tonen 1, te verbergen 0: 
// geef je tweede parameter voor find functie(.. , {hier}).
// in lijst moeten of alle 0s zitten of alle 1:
db.restaurants.find({} , {"name":1,"address":1} ); 
db.restaurants.find({"cuisine":"Italian" , "address.zipcode" :"10075"} , {"name":0,"address":0} ); 

// restaurant dat bij sortering op naam (name) eerst staat:
db.restaurants.find().sort({"name": 1}).limit(1);
db.restaurants.findOne({cuisine:'Italian'});

db.restaurants.find().skip(20000);

// restautans met naam Juni:
db.restaurants.find( {'name': 'Juni'} );
db.restaurants.updateOne({name:"Juni"}, {$set: {"cuisine": "Belgian"} } ) ;
db.restaurants.find({ "name" : "Juni"});

db.restaurants.updateMany({ "cuisine" : /^American/}, { $set: {"cuisine": "American"} } );

db.restaurants.find({ "cuisine" : "American"} );
// alle resaurants waar in adres zit building 1470:
db.restaurants.find({ "address.building": "1470"} );
// alle documenten van building 1470 verwijderen:
db.restaurants.deleteOne({ "address.building": "1470"} );
db.restaurants.deleteMany({ "address.building": "1470"} );

