'use strict';

var toetsenbord = require('readline-sync');
var som=0;
var aantal = 0;
var getal;

console.log('Geef 5 getallen in:');
//getal = parseInt(toetsenbord.question("Geef getal in:"), 10);
for (var aantal=1; aantal <= 5; aantal++){
    getal = parseInt(toetsenbord.question("Geef getal in:"), 10);
    while (isNaN(getal)) {
        getal = parseInt(toetsenbord.question("Dat moet een getal zijn. Geef ee getal in:"), 10);
        
    }
    som+=getal;
    console.log('%d',som);

}
console.log('tataal :%d',som);
