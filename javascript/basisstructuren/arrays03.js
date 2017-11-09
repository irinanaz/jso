'use strict';

var bestemmingen1 = [ "De zee", "Het strand", "De kust" ];
var bestemmingen2;

// gevraagd: zorg ervoor dat bestemmingen2 een kopie is van bestemmingen1
// poging 1 (foute oplossing; we maken geen kopie)
bestemmingen2 = bestemmingen1;  // bestemmingen1 en bestemmingen2 zijn allebei namen voor dezelfde array

// test
bestemmingen1[0] = "Hoboken";
console.log(bestemmingen1[0]);   // Hoboken
console.log(bestemmingen2[0]);   // Hoboken

// poging 2
bestemmingen2 = new Array(bestemmingen1.length);
for(var i=0; i< bestemmingen1.length; i++){
    bestemmingen2[i] = bestemmingen1[i];
}
bestemmingen1[0] = "Charleroi";
console.log(bestemmingen1[0]);   // Charleroi
console.log(bestemmingen2[0]);   // Hoboken

// poging 3
bestemmingen2 = bestemmingen1.slice();
bestemmingen1[0] = "Antwerpen";
console.log(bestemmingen1[0]);   // Antwerpen
console.log(bestemmingen2[0]);   // Charleroi

// poging 4
bestemmingen2 = [];
bestemmingen2 = bestemmingen2.concat(bestemmingen1);
bestemmingen1[0] = "New York";
console.log(bestemmingen1[0]);   // New York
console.log(bestemmingen2[0]);   // Antwerpen
