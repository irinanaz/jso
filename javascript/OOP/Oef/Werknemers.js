'use strict';

var toetsenbord = require('readline-sync');


function Persoon(naam, voornaam) {
    this.voornaam = voornaam;
    this.naam = naam;
}
Persoon.prototype.volledigeNaam = function () {
    return this.voornaam + " " + this.naam.toUpperCase();
}
Persoon.prototype.toString = function () { // toString kan je wel aanmaken als we bv een andere functie willen aanmaken dan voorzien bij Javascript bib.

    return this.volledigeNaam();
}

function Werknemer (naam , voornaam, loon){
    // this.naam = naam;
    // this.voornaam = voornaam; 
    /*om korter te maken:*/
    Persoon.apply(this, arguments); // arguments - geeft door alle elementen ,
    this.loon = loon;                  // of we kinnen (this, naam, voornaam, loon). loon is overbodig.
    // volgorde is wel belangrijk bij oproep van de functies.

}
// Inheritance (overerving)
// alle methoden van persoon aan werkgever door te geven 
Werknemer.prototype = new Persoon(); 
Werknemer.prototype.toString= function(){
    return this.volledigeNaam() + " krijgt een loon van " + this.loon;
}

var persoon1 = new Persoon("KAPOT", "Isabel");
console.log(persoon1.volledigeNaam());
console.log(persoon1.toString());

var werknemer1 = new Werknemer("Stok", "Pol", 1234);
console.log(werknemer1.volledigeNaam());
console.log(werknemer1.toString());

var werknemer2 = new Werknemer ("Selie", "Peter", 2345);
werknemer2.volledigeNaam = function(){
    return "Met de groeten van " + this.voornaam + " " + this.naam;
}
console.log(werknemer2.volledigeNaam());

/* uitvoer
Isabel KAPOT
Isabel KAPOT
Pol STOK
Pol STOKkrijgt een loon van 1234
met de groeten van Peter Selie
*/
