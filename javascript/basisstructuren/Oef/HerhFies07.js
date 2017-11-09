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
var result="";
if (puntenW>=6){
    if (puntenI+puntenB>= 12){
        result ="Geslaagd!";
    } else {
        result= "Niet geslaagd!";
        if (puntenI<6){result+="Te winig punten voor Informatica."}
        if (puntenB<6){result+="Te winig punten voor Boekhouden."}
    }
}

