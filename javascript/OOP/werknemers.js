function Persoon(naam, voornaam){
    this.naam = naam;
    this.voornaam = voornaam;
}

Persoon.prototype.volledigeNaam = function(){
    return this.voornaam + " "+ this.naam.toUpperCase();
}

Persoon.prototype.toString = function(){
    return this.volledigeNaam();
}

function Werknemer(naam, voornaam, loon){
    /*
    this.naam = naam;
    this.voornaam = voornaam;
    */
    // korter, door constructor van Persoon op te roepen:
    Persoon.apply(this, arguments);

    this.loon = loon;
}

// INHERITANCE (OVERERVING)
// alle methodes die we gedefinieerd hebben voor Persoon-objecten,
// moeten ook gebruikt kunnen worden voor Werknemer-objecten:
Werknemer.prototype = new Persoon();

// methode overschrijven  
Werknemer.prototype.toString = function(){
    return this.volledigeNaam() + " krijgt een loon van " + this.loon;
}

var persoon1 = new Persoon("Kapot", "Isabel");
console.log(persoon1.volledigeNaam());		 // Isabel KAPOT
console.log(persoon1.toString());		// zelfde output als persoon1.volledigeNaam()

var werknemer1 = new Werknemer("Stok", "Pol", 1234);
console.log(werknemer1.volledigeNaam());
console.log(werknemer1.toString());  // versie van Werknemer

var werknemer2 = new Werknemer("Selie", "Peter", 2345);
// methode overschrijven voor een object
werknemer2.volledigeNaam = function(){
    return "met de groeten van " + this.voornaam + " " + this.naam;
}
console.log(werknemer2.volledigeNaam());  // versie van werknemer2

console.log(werknemer1.volledigeNaam());  // versie van Persoon