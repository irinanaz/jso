'use strict';
var toetsenbord = require('readline-sync');



function tekenLijn(teken="=", lengte=25){
    var lijn="";
    if (teken==""){teken="=";}
    for (var i=1; i<=lengte; i++){
        lijn+=teken;
    }
    return lijn;
}

var aantal = parseInt(toetsenbord.question('Hoe veel tekens? '),10);
var char= toetsenbord.question("geef een karakter in:");
/* //Oef van a tem c:
console.log (tekenLijn(char,aantal));*/

for (var i=1; i<=aantal;i++){
    console.log (tekenLijn(char,i)); // met de gevraagde charakter 
}
for (var i=1; i<=aantal;i++){
    console.log (tekenLijn("*",i));  // met een *.
}


