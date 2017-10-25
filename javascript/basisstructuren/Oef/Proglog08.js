'use strict';

var toetsenbord = require('readline-sync');
var GRENS=100;
var prijsaandeel=3.75;


function aankoop(x, p){
    return x*p;
}

var nieuwprijs=prijsaandeel;
var aantal = parseInt(toetsenbord.question('Hoeveel aandelen van Fortis wilt u kopen: '),10);
var totaal = aankoop(aantal,prijsaandeel);
var portefeuille =totaal;
console.log("U heeft al gekocht voor %d EUR",totaal);
console.log("De huidige waarde van uw portefeuille is: %d",portefeuille);
var totaalaantal= aantal;
while (totaal<100) {
    nieuwprijs=nieuwprijs-0.1;
    
    console.log("\n%d",nieuwprijs);
    aantal =parseFloat(toetsenbord.question('Hoeveel aandelen van Fortis wilt u bij kopen: '),10);
    totaalaantal+=aantal;
    totaal += aankoop(aantal,nieuwprijs);
    portefeuille = aankoop (totaalaantal,nieuwprijs);
    console.log("U heeft al gekocht voor %d EUR",totaal);
    console.log("De huidige waarde van uw portefeuille is: %d",portefeuille);
}
console.log("Uw geld is op.");

