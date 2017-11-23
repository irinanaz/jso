'use strict';

// CONSTRUCTOR
// functie die we kunnen gebruiken om 0,1 of meer objecten 
// met dezelfde properties en methodes te kunnen maken
function Auto(merk, model) {
    this.merk = merk;
    this.model = model;
    this.cabrio = false;
    this.bouwjaar = new Date().getFullYear();
    this.gestart = false;
    this.starten = function () {
        this.gestart = true;
        console.log("de motor draait ....");
    };
    this.rijden = function (geluid) {
        if (this.gestart) {
            var tmp = this.gegevens();
            console.log("Ik vertrek met mijn %s", tmp);
            console.log(geluid);
        }
        else {
            console.log("start de motor eerst!");
        }
    };
    this.gegevens = function () {
        var cabrioMelding = this.cabrio ? "cabrio " : "";
        return cabrioMelding + this.merk + " " + this.model + " uit " + this.bouwjaar;
    };
}

// objecten maken met constructor
var auto1 = new Auto("BMW", "X6");
console.log(auto1);
console.log("auto1 is een " + auto1.merk + " " + auto1.model);
auto1.rijden("broembroem");
auto1.starten();
auto1.rijden("broembroem");
console.log(auto1.gegevens());

var auto2 = new Auto("Audi", "A6");
auto2.cabrio = true;
auto2.starten();
auto2.rijden("tuuttuut");
auto2.kleur = "safierzwart";

console.log(auto1);
console.log(auto2);