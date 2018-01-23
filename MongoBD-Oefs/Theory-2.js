// aggregate 
db.restaurants.find({"name":/A/}).count();

// lijst van alle cuisines van alle restaurant:
db.restaurants.find({},{"cuisine":1,"_id":0});
// lijst van alle cuisines van alle restaurant zonder dubbele:
db.restaurants.distinct("cuisine"); // array terug met unieke waarden.

// lijst van alle cuisisnes van zipcode 10462:
db.restaurants.distinct("cuisine",{"address.zipcode": "10462"});

// lijst 
// group met object met drie 
db.restaurants.group({
    "key" : {"cuisine":1},  // groeperen op de waarde van deze veld
    "initial" : { "aantal": 0},  // elk groep krijgt een veld bij . nl. aantal met beginwaarde 0.
    "reduce" : function(current, result){  // voor elk groep wordt deze functie uitgevooerd bij elk nieuwe 'lid' in e groep
    result.aantal +=1;}        
    });
    
db.restaurants.group({
    "key" : {"cuisine":1},  // groeperen op de waarde van deze veld
    "initial" : { "aantal": 0, "aantalNoBronx" : 0},  // elk groep krijgt een veld bij . nl. aantal met beginwaarde 0.
    "reduce" : function(current, result){  // voor elk groep wordt deze functie uitgevooerd bij elk nieuwe 'lid' in e groep
    if (current.borough == "Bronx") {result.aantal +=1;} else {result.aantalNoBronx+=1;}}        
    });
// of    
db.restaurants.group({
    "key" : {"cuisine":1},  // groeperen op de waarde van deze veld
    "initial" : { "aantal": 0},  // elk groep krijgt een veld bij . nl. aantal met beginwaarde 0.
    "reduce" : function(current, result){  // voor elk groep wordt deze functie uitgevooerd bij elk nieuwe 'lid' in e groep
    result.aantal +=1;}, 
     "cond" : {"borough" : "Bronx"}
    });
    
//
db.restaurants.group({
    "keyf" : function(doc){  // als we groepeering moeten berekenen 
        return {"eerste_letter": doc.name.charAt(0)}},  
    "initial" : { "aantal": 0},  
    "reduce" : function(current, result){  
    result.aantal ++;}
    });
    
 
// aggregate pipeline:

// filteren, grouperen sorteren:
db.restaurants.aggregate([{$match: {"borough":"Bronx"}}]);

// alle restaurants uit bronx gegroepeerd per cuisine.
// grouperen op basis van cuisisne  $group: {"_id": "$cuisine"} : "_id" in de group -dat is een afspraak.
// "cuisine" is de naam van field en geen waarde, dus $ voor -> access
// sum :1 betekent : +1 bij elk document.
db.restaurants.aggregate([{$match: {"borough":"Bronx"}}, {$group: {"_id": "$cuisine", "aantal" :{$sum: 1}}}]);

// nog bij - sorteren
db.restaurants.aggregate([{$match: {"borough":"Bronx"}}, {$group: {"_id": "$cuisine", "aantal" :{$sum: 1}}},
{$sort:{"aantal" : -1}}   ]);

// nog de resultaat in de collectie stekken:  {$out: "nieuwe_naam_van_de_collectie"}:
db.restaurants.aggregate([{$match: {"borough":"Bronx"}}, {$group: {"_id": "$cuisine", "aantal" :{$sum: 1}}},
{$sort:{"aantal" : -1}}, {$out: "bronx_overzicht_per_cuisine"} ]);

db.bronx_overzicht_per_cuisine.find();

// tell alle restaurants uit bronx : eerst een groep en dan tel ze ( met lege object bij groep als _id:
db.restaurants.aggregate([  {$match: {"borough":"Bronx"}} , {$group: {"_id": "","aantal":{$sum:1}}}]);

// alle restaurants groeperen volgens eerste leter en gem score per group:
// bewerking als object in{} . substr ["$naamvantabel", beginindex,eindindex]
db.restaurants.aggregate([ {$group: {"_id": {$substr:["$name", 0, 1] }, "aantal":{$sum: 1} }} ]);

db.restaurants.aggregate([ {$group: {"_id": {$substr:["$name", 0, 1] }, "aantal":{$sum: 1} }},
    {$sort: {"aantal" : -1 }}  ]);

// als we ergens een array hebben in tabel, bv scores, en we willen deze gegevens apart in tabel zetten, dan:
// unwind doet van aan array van gegevens aparte restaurants met een grade. (ontraffeld)
db.restaurants.aggregate( [ {$match:{"restaurant_id": "30112340"}} , {$unwind: "$grades" } ]);
// gem score van een restaurant:
db.restaurants.aggregate( [ {$match:{"restaurant_id": "30112340"}} , {$unwind: "$grades" } ,
            {$group: {"_id":"", "avg_score": {$avg: "$grades.score" }} }]);
// gem scores voor alle restaurants . programma kunt naar scores niet kijken 
//want scores zijn ingeboude document- dus eerst ontraffellen.      
db.restaurants.aggregate( [ {$unwind: "$grades" } ,
            {$group: {"_id":"", "avg_score": {$avg: "$grades.score" }} }]);

// bereken gem scores per eerste letter:
db.restaurants.aggregate([ {$unwind: "$grades" }, 
       {$group: {"_id": {$substr:["$name", 0, 1] }, "gemiddelde":{$avg: "$grades.score"} }} ]);
       
// gem score per naam:
db.restaurants.aggregate([ {$unwind: "$grades" }, 
       {$group: {"_id": "$name", "gemiddelde":{$avg: "$grades.score"} } } ]);
       
// gem score per naam gesoorteerd zodat hoogste gem bovenaan staat:
db.restaurants.aggregate([ {$unwind: "$grades" }, 
       {$group: {"_id": "$name", "gemiddelde":{$avg: "$grades.score"} } },{$sort: {"gemiddelde" : -1 }} ]);
       
// beste gem score van bovenste opdracht:
db.restaurants.aggregate([ {$unwind: "$grades" }, 
       {$group: {"_id": "$name", "gemiddelde":{$avg: "$grades.score"} } },
       {$sort: {"gemiddelde" : -1 }},
       {$group: {"_id": "", "beste_gemiddelde_score": {$first: "$gemiddelde"}}} ]); 
       
// de naam van rest die de beste gem score heeft:
db.restaurants.aggregate([{ $unwind: "$grades" },
   {$group: {"_id": "$name", "gemiddelde":{$avg: "$grades.score"} } },
   {$match:{"gemiddelde":       
        db.restaurants.aggregate([ {$unwind: "$grades" }, 
                {$group: {"_id": "$name", "gemiddelde":{$avg: "$grades.score"} } },
                {$sort: {"gemiddelde" : -1 }},
                {$group: {"_id": "", "beste": {$first: "$gemiddelde"}}} ]).toArray()[0].beste}}]);     
                // resultaat "beste" in aaray te zetten en de eerste element halen.
                // daarmee te vergelijken in buitenste aggregate


// beste op andere manier met max van de gemiddelde:      
db.restaurants.aggregate([ {$unwind: "$grades" }, 
                {$group: {"_id": "$name", "gemiddelde":{$avg: "$grades.score"} } },
                {$group: {"_id": "","beste_score":{$max:"$gemiddelde" }}} 
                ]);
                

// MapReduce  
      
db.restaurants.mapReduce(      
                function(){  emit(this.cuisine, 1); },
                function(key, values){ return Array.sum(values); },
                {out: "restos_per_cuisine", query: { "name": /^A/ }}
            );
db.restos_per_cuisine.find();