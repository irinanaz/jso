'use strict';

var toetsenbord = require('readline-sync');
var GRENS=100;
var prijsaandeel=3.75;


function aankoop(x){
    return x*prijsaandeel;
}


var aantal = toetsenbord.question('Hoeveel aandelen van Sortis wilt u kopen: ');
var totaal = aankoop(aantal);
console.log("U heeft al gekocht voor %d EUR",totaal) 
while (totaal<100) {
    
    aantal = toetsenbord.question('Hoeveel aandelen van Sortis wilt u bij kopen: ');
    totaal += aankoop(aantal);
   console.log("U heeft al gekocht voor %d EUR",totaal) ;
}
console.log("Uw geld is op.");

