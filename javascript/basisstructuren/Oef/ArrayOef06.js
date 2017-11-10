'use strict';
var toetsenbord = require('readline-sync');
var cursisten = 9;
var lengte = new Array(9);




lengte[0] = parseFloat(toetsenbord.question("Geef lengte in:"));
var kleinste=lengte[0];
var somLengtes=lengte[0];
var gemLengte = lengte[0];
var posKleinste =0;
for (var i= 1; i < cursisten; i++){
    lengte[i] = parseFloat(toetsenbord.question("Geef lengte in:"));
    somLengtes += lengte[i];
    if (lengte[i] < kleinste){
        posKleinste = i;
        kleinste = lengte[i];

    }
}
console.log("Gemiddelse lengte is: %d", somLengtes/cursisten);
console.log("De lengte van de kleinste is %d: en die staat op positie %d. ", kleinste, posKleinste+1);


