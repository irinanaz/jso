'use strict';
var toetsenbord = require('readline-sync');

var eenheden = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var tientallen = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var honderdtallen = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var duizendtallen = ["", "M", "MM"];


function geefJaar(){
var jaarCorrect=false;
var jaar = toetsenbord.question("Geef jaar in (van 1 tem 2100):  ");
while (jaarCorrect==false){
    //console.log(jaarCorrect,parseInt(jaar));
    if (isNaN(jaar)==true){
        console.log("Dat is de correcte invoer niet. Geef een getal in.")
        jaar = toetsenbord.question("Geef jaar in, aub (van 1 tem 2100):  ");
    } else {
        if (jaar >0 && jaar<=2100){
            jaarCorrect=true;
        }else {
            jaar = toetsenbord.question("Geef jaar in, aub. dat moet tussen 1 en 2100 liggen:  ");
        }

    }
}
//console.log(jaar, jaarCorrect);
return jaar;
}

function jaarNaarRomeins(jaar){
    var romeinsGeg = [duizendtallen,honderdtallen,tientallen,eenheden];
    // console.log( jaar.length);
    var jRom=[0,0,0,0];
    var jaarRom="";
    var jR=3;
    for (var i=jaar.length-1; i>=0;i--){
        jRom[jR]=jaar[i];
        // console.log(jRom);
        jR-=1;
    }

    for (jR = 0; jR<4; jR++){
        jRom[jR]=romeinsGeg[jR][jRom[jR]];
        jaarRom = jaarRom.concat(jRom[jR]);
        // console.log(jRom[jR]);
        // console.log(jRom);
        // console.log(jaarRom);
    }

    return jaarRom;
}
var jaarArab = geefJaar();
console.log(jaarArab);
var jaarRom = jaarNaarRomeins(jaarArab);
console.log(jaarRom);
console.log(jaarArab+" is in Romeinse cijfers "+jaarRom+".");


/* TODO: 
Vraag aan de gebruiker een jaartal tussen 0 (excl) en 2100 (incl). 
Schrijf een functie om te controleren of het ingevoerde gegeven een getal is 
en tussen 0 (excl) en 2100 (incl) ligt.
Het programma moet een andere foutmelding tonen als het ingetikte gegeven geen getal is
dan wanneer het ingetikte gegeven wel een getal is maar buiten de grenzen ligt. 
Het script mag pas verder gaan als de gebruiker een geldig getal ingetikt heeft. 
(Invoer blijven vragen als dit niet het geval is.) 
*/

/* TODO:
Schrijf een functie die van een gegeven getal de voorstelling in Romeinse cijfers teruggeeft.
Gebruik deze functie om op het einde van het script te tonen 
<jaar> is in Romeinse cijfers <romeins> 
waarbij <jaar> het ingetikte jaar is 
en <romeins> dat jaar in Romeinse cijfers.
*/