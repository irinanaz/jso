db.publis.find();
// 1. Lijst met alle boeken (type “Book”) ;
db.publis.find({"type":"Book"});

// 2. Lijst met alle publicaties sinds 2011 (year groter of gelijk aan 2011);
db.publis.find({"year": {$gte: 2014}});

// 3. Lijst met alle boeken gepubliceerd sinds 2014 ;
db.publis.find({"type":"Book","year": {$gte: 2014}});

// 4. Lijst met alle publicaties van de auteur “Toru Ishida” ;
db.publis.find({"authors":"Toru Ishida"});

// 5. Lijst met alle uitgevers  (“publisher”), zonder dubbels ;
db.publis.distinct("publisher");

// 6. Lijst met alle auteurs, zonder dubbels;
db.publis.distinct("authors");

// 7. Lijst met alle publicaties van de auteur “Toru Ishida” , 
// gesorteerd op boektitel en  startpagina;
db.publis.find({"authors":"Toru Ishida"}).sort({"title":1,"page.start":1});

// 8. Titel (van de publicatie) en de pagina’s van alle publicaties van de auteur “Toru Ishida” , 
// gesorteerd op boektitel en  startpagina;
db.publis.find({"authors":"Toru Ishida"},{"_id":0,"title":1,"pages":1}).sort({"title":1,"page.start":1});
//met agregate:
db.publis.aggregate([{$match:{authors:"Toru Ishida"}},
                {$sort:{ booktitle:1, "pages.start" : 1}},
                {$project: {title:1,pages:1, _id:0}}
]);
// 9. Aantal publicaties van de auteur “Toru Ishida”;
db.publis.find({"authors":"Toru Ishida"}).count();
//of:
db.publis.aggregate([{ $match:{authors:"Toru Ishida"}},
          {$group: {_id:null,total:{$sum:1}}}  ]);
// 10. Voor alle publicaties uitgegeven sinds 2011 : type en aantal per type;
db.publis.aggregate([  {$match: {"year":{"$gte":2011}}}, {$group: {"_id": "$type", "aantal":{$sum: 1}} }   ]);
//of :
db.publis.group ({
  key:{type:1},
  reduce: function(cur,result) {result.aantal +=1},
  initial: {aantal: 0},
  cond:(year: {$gte: 2011})
});
// 11. Per auteur :  auteur en aantal publicaties, dalend gesorteerd op aantal publicaties;
// foutieve :  db.publis.aggregate([ {$group: {"_id": "$authors", "aantal":{$sum: 1}} } ,{$sort:{"aantal" : 1}}]);

db.publis.aggregate([ {$unwind: "$authors"},{$group: {"_id":"$authors", "number" : {$sum:1}}},
                {$sort:{"number":-1}}
]);








