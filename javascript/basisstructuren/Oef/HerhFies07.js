'use strict';
var toetsenbord = require('readline-sync');

function vraagPunten(vak){
 var punten=toetsenbord.question("geef jouw punten voor "+vak+": ");

 while (punten <0 || punten >10 || isNaN(punten) ){
    punten=toetsenbord.question("geef jouw punten voor "+ vak +" (tussen 0 en 10) : ");
 }
 return punten;
}

var puntenW = vraagPunten("Wiskunde");
var puntenB = vraagPunten("Boekhoeden");
var puntenI = vraagPunten("Informatica");

if (puntenW>=6){
    if (puntenI+puntenB>= 12){
        console.log ("Geslaagd!");
    }else console.log("Niet geslaagd voor informatica en boekhouden ")
}

