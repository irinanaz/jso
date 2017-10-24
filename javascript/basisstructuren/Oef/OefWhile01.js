'use strict';

var toetsenbord = require('readline-sync');
var gem = 0;
var som = 0;
var antal = 0;
var getal = parseInt(toetsenbord.question("Geef geheel getal (<0 om te stoppen): "), 10);
if (getal >=0) { 
    while (getal >= 0) {
        antal=antal+1;
        som=som+getal;
        gem = som/antal; // kan vervangen worden door som+=getal
        getal = parseInt(toetsenbord.question("Geef geheel getal (<0 om te stoppen): "), 10);
        
        
    }
    console.log("Het gemiddelte is %d", gem);
} else { console.log("Verkerde invoer"); }


