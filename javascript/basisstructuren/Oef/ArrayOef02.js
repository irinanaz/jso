'use strict';
var toetsenbord = require('readline-sync');

var namen = new Array("Jan","Piet", "Joris" ,"Corneel");
var omzet = new Array(0,0,0,0);
var pos;
var inOmzet;
var inNaam = toetsenbord.question("Naam: ");

while (inNaam != "einde"){
    inOmzet = parseFloat(toetsenbord.question("Omzet: "),10);
    pos= namen.indexOf(inNaam);
    omzet[pos]= parseFloat(omzet[pos])+inOmzet;
    inNaam = toetsenbord.question("Naam: ");
}

for (var i=0; i<namen.length; i++){
    console.log ("Omzet van "+ namen[i]+ " is "+ omzet[i] +" Euro.");

}