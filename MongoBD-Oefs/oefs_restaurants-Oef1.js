use test;
// 1. Display all the documents in the collection restaurants. 
db.restaurants.find();


// 2. Display the fields restaurant_id, name,
// borough and cuisine for all the documents in the collection restaurant.

db.restaurants.find( {} , {"address":0,"grades":0} );

// 3. Display the fields restaurant_id, name, borough and cuisine, but exclude the field _id 
// for all the documents in the collection restaurant. 
db.restaurants.find( {} , {"_id":0,"address":0,"grades":0} );

// 4. Display the fields restaurant_id, name, borough and zipcode, but exclude the field _id 
// for all the documents in the collection restaurant. 

db.restaurants.find( {} , {"_id":0, "address.building":0 , "address.coord":0,"address.street":0, "grades":0} );


// 5. Display all the restaurants which are in the borough Bronx.
db.restaurants.find({"borough": "Bronx"});

// 6. Display the first 5 restaurants which are in the borough Bronx.
db.restaurants.find({"borough": "Bronx"}).limit(5);

// 7. Display the next 5 restaurants after skipping first 5 which are in the borough Bronx. 
db.restaurants.find({"borough": "Bronx"}).limit(5).skip(5);

//8. Find the restaurants that achieved a score more than 90. 
db.restaurants.find({"grades.score": {$gt: 90} });

//9. Find the restaurants that achieved a score, more than 80 but less than 100. 
db.restaurants.find({"grades": {$elemMatch: {"score": {$gt: 80} , "score": {$lt: 90} } } } );
db.restaurants.find({"grades.score": {$gt: 80 , $lt: 90} } );
// FOUT :  db.restaurants.find({"grades.score": {$gt: 80}  , "grades.score": {$lt: 90} } );

//10. Find the restaurants which locates in latitude value less than -95.754168.  
// (coord < -95.754168):

db.restaurants.find({"address.coord.0" : {$lt:-95.754168} });

// 11. Find the restaurants that don’t prepare any cuisine of 'American'. 
db.restaurants.find({"cuisine" : {$ne:"American"} });

// 12.find the restaurants that don’t prepare any cuisine of 'American' and achieved 
// a score more than 70 and have a lattitude less than -65.754168.
db.restaurants.find({"cuisine" : {$ne:"American"}  , "grades.score": {$gt: 70} , "address.coord.0" : {$lt:-65.754168} });

// 13.Find the restaurants which don’t prepare any cuisine of 'American ' 
// and achieved a grade point 'A' and do not belong to the borough Brooklyn. 
// The documents must be displayed according to the cuisine in descending order.
db.restaurants.find({"cuisine" : {$ne:"American"} , "grades.grade":  "A"  , 
 "borough": {$ne: "Brooklyn"}} ).sort({"cuisine":-1});

// 14. Find the restaurant id, name, borough and cuisine for 
// those restaurants which contain 'Wil' as first three letters for its name. 
db.restaurants.find( {"name": /^Wil/} , {"_id":0,"address":0,"grades":0} );


//15. Write a MongoDB query to find the restaurant id, name, borough and cuisine 
// for those restaurants which contain 'ces' as last three letters for its name. 
db.restaurants.find( {"name": /ces$/} , {"_id":0,"address":0,"grades":0} );

// 16. Find the restaurant id, name, borough and cuisine 
// for those restaurants which contain 'Reg' as three letters somewhere in its name. 
db.restaurants.find( {"name": /.*Reg.*/} , {"_id":0,"address":0,"grades":0} );

//17. Find the restaurants which belong to the borough Bronx 
// and prepare either American or Chinese dishes. 
db.restaurants.find(
    {"borough": "Bronx" , $or: [{"cuisine":"Chinese" }, {"cuisine":"American"} ]  } 
    );
    
//18. Find the restaurant id, name, borough and cuisine for restaurants which belong 
// to the borough Staten Island or Queens or Bronx or Brooklyn. 
db.restaurants.find(
    {$or: [{"borough": "Staten Island" }, {"borough": "Queens"}, {"borough": "Brooklyn"}]  } ,
    {"_id":0,"address":0,"grades":0}
    );   
// of:
db.restaurants.find(
    {"borough": {$in: ["Staten Island" , "Queens",  "Brooklyn"] } } ,
    {"_id":0,"address":0,"grades":0}
    );    
// 19. Find the restaurant id, name, borough and cuisine for those restaurants which 
// are not belonging to the borough Staten Island or Queens or Bronx or Brooklyn. 
db.restaurants.find(
    {$and: [{"borough": {$ne:"Staten Island" }}, {"borough":{$ne: "Queens"}}, {"borough":{$ne: "Brooklyn"}}]  } ,
    {"_id":0,"address":0,"grades":0}
    );   
    
db.restaurants.find(
    {"borough": {$nin: ["Staten Island" , "Queens",  "Brooklyn"] } } ,
    {"_id":0,"address":0,"grades":0}
    );
// 20. Find the restaurant id, name, borough and cuisine for those restaurants which 
// achieved a score which is not more than 10. 
 db.restaurants.find(
    {"grades.score": {$lte: 10} } ,
    {"_id":0,"address":0,"grades":0}
    );  
    
//21. Write a MongoDB query to find the restaurant id, name, borough and cuisine for 
// those restaurants which prepare dishes except 'American' and 'Chinese' 
// or restaurants whose name begins with 'Wil'. 
   db.restaurants.find(
    {$or: [{"cuisine": {$nin: ["American ", "Chinese"]}}, {"name": /^Wil/}] } ,
    {"_id":0,"address":0,"grades":0}
    ); 
    
    
// 22. Find the restaurant id, name and grades for those restaurants which have a 
//grade of "A" with score 11 and ISODate "2014-08-11T00:00:00Z".
db.restaurants.find(
    {"grades.grade":"A", "grades.score": 11,  "grades.date":ISODate("2014-08-11T00:00:00Z")} ,
    {"_id":0,"address":0,"cuisine":0}
    ); 
    
    
    
// 23. Find the restaurant id, name and grades for those restaurants where the 2nd element 
// of the grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z". 
db.restaurants.find(
    {"grades.1.grade":"A", "grades.1.score": 9,  "grades.1.date":ISODate("2014-08-11T00:00:00Z")} ,
    {"_id":0,"address":0,"cuisine":0}
    ); 
//24. Find the restaurant id, name, address and geographical 
    //location for those restaurants where the 2nd element of coord array contains a 
    //value which is more than 42 and upto 52.
    db.restaurants.find(
    {"address.coord.1": {$gt: 42,  $lt: 52}} ,
    {"_id":0,"cuisine":0}
    ).sort({"address.coord.1":1});
// 25. Arrange the name of the restaurants in ascending order.
   db.restaurants.find({},{name:1}).sort({name:1});
   
// 26. Arrange the name of the restaurants in descending order. 
   db.restaurants.find({},{name:1}).sort({name:-1});
   
//27. Arrange the restaurants along cuisine in ascending order.  
// Restaurants with the same cuisine should be ordered on descending borough. 
    db.restaurants.find().sort({"cuisine":1,"borough":-1});
// 28. Find the restaurants where the address contains the field street. ({ $exists : true }):
    db.restaurants.find({"address.street": {$exists : true }});
//29. Select all documents in the restaurants collection where the coord field value is a Double. ({$type:1})
    db.restaurants.find({"address.coord": {$type:1}});
//30. Select the restaurant id, name and grades for those restaurants 
//   which have a score that returns 0 as a remainder after dividing the score by 7. 
    db.restaurants.find({"grades.score": {$mod:[ 7, 0 ]}},{"_id":0,"address":0,"cuisine":0,"borogh":0});
// 31. Find the restaurant name, borough, longitude and attitude and cuisine 
//    for those restaurants which contain 'mon' (case insensitive) somewhere in their name. 
    db.restaurants.find(
    {"name": /.*mon.*/} ,
    {"_id":0,"grades":0,"address.building":0,"address.street":0,"address.zipcode":0,}
    ); 
// 32. Find the restaurant name, borough, longitude and latitude 
//    and cuisine for those restaurants which contain 'Mad' (case insensitive) as first three letters of their name. 
   db.restaurants.find(
    {"name": /^Mon/} ,
    {"_id":0,"grades":0,"address.building":0,"address.street":0,"address.zipcode":0,}
    ); 
