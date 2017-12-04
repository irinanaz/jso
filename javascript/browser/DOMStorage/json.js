'use strict';

// JSON object (niet voorgesteld als string)
var jsonSmurf = { "naam": "Grote Smurf", "adres": "Grote paddestoel", "woonplaats": "Smurfendorp" };
console.log(jsonSmurf.naam, " woont in ", jsonSmurf.adres, " in ", jsonSmurf.woonplaats);

// JSON objecten als strings
var jsonPersoon = '{ "voornaam": "Joske", "naam": "Vermeulen", "lievelingsGetal": 13, "gehuwd": false }';
var jsonArrayMetNamen = '["Karen", "Kristel", "Kathleen"]';
var jsonArrayMetObjecten = '[{"naam": "Karen", "haarkleur": "ros"},{"naam": "Kristel", "haarkleur": "zwart"},{"naam": "Kathleen", "haarkleur": "blond"}]';

// JSON string object -> JavaScript
var persoon = JSON.parse(jsonPersoon);
console.log(persoon);
var arrayMetNamen = JSON.parse(jsonArrayMetNamen);
console.log(arrayMetNamen);
var arrayMetObjecten = JSON.parse(jsonArrayMetObjecten);
console.log(arrayMetObjecten);

// JavaScript -> JSON string object
var strip1 = { titel: "De zwarte smurfen", jaar: 1963 };
var strip2 = { titel: "De smurfin", jaar: 1967 };
var strip3 = { titel: "De leerling smurf", jaar: 1971 };
var strip4 = { titel: "Smurfvoetbal", jaar: 2016 };
var strips = [strip1, strip2, strip3, strip4];
var jsonStrips = JSON.stringify(strips);
console.log(jsonStrips);
var persoonMetStrips = { voornaam: "Joske", 
    naam: "Vermeulen", 
    strips: strips,  
    volledigeNaam: function(){
        return this.voornaam+" "+this.naam;
    }};
console.log(JSON.stringify(persoonMetStrips));