'use strict';

var toetsenbord = require('readline-sync');
var som=0;
var aantal = 0;
var getal;

console.log('Geef 5 getallen in:');

for (var aantal=1; aantal <= 5; aantal++){
    getal = toetsenbord.question("Geef een getal in:");// geen parseInt hier, want nog niet zeker dat er een gatal W ingetikt
    while (isNaN(getal)) {
        getal = parseInt(toetsenbord.question("Dat moet een getal zijn. Geef een getal in:"), 10);
        
    }
    som+=parseInt(getal);
    //console.log('%d',som); tussen resultaat te tonen

}
console.log('tataal :%d',som);
