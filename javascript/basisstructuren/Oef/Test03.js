'use strict';

var toetsenbord = require('readline-sync');
var nietgeslaagd=0;
var somPunten=0;
var som=0;

for ( var i=1; i<=3; i++){
var sPunten = parseInt(toetsenbord.question("Hoe veel studiepunten?: "),10);
var score =parseFloat(toetsenbord.question("Wat is behaalde score? "),10);

while (score< 0 || score >20){
    score = parseFloat(toetsenbord.question("Geef geldige score , aub(van 0 tem 20)."),10);
}
if (score<10){nietgeslaagd++;}
som+=score*sPunten;
//console.log(som);
somPunten+=sPunten;
//console.log(somPunten);
}
var gemiddelte = som/somPunten;
console.log( "Gewogen gemiddelde is: %d",gemiddelte );
console.log( "Niet geslaagd %d", nietgeslaagd );

 