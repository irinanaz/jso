'use strict';

function Tankbeurt(inhoud, afstand){
    this.inhoud = inhoud;
    this.afstand = afstand;
}

var toetsenbord = require('readline-sync');
var hoeveelheid, afstand, somHoeveelheid = 0, somAfstand = 0;
var tankbeurten = [];
for(var i=1; i <= 5; i++){
    hoeveelheid = parseFloat(toetsenbord.question('Hoeveelheid brandstof (l): '));
    afstand = parseFloat(toetsenbord.question('Afstand (km): '));
    tankbeurten.push( new Tankbeurt(hoeveelheid, afstand) );
}

for(var i=0; i < tankbeurten.length; i++){
    somAfstand += tankbeurten[i].afstand;
    somHoeveelheid += tankbeurten[i].inhoud;
}
console.log('Totale hoeveelheid brandstof = %d', somHoeveelheid);
console.log('Totale afstand = %d', somAfstand);
console.log('Verbruik per 100km = %d', 100 * somHoeveelheid/somAfstand);