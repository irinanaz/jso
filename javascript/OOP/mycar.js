'use strict';

var mijnAuto;

// een object heeft eigenschappen (properties) en functies (methodes)

// object literal
mijnAuto = {
    merk: "Fjord",
    model: "Festa",
    bouwjaar: 1960,
    cabrio: true,
    gestart: false,
    rijden: function () {
        // javascript zoekt eerst naar een lokale var met naam gestart
        // als die er niet is, zoekt javascript een parameter met naam gestart
        // als die er niet is, zoekt javascript een globale var met naam gestart
        //if (gestart) {   // fout bij uitvoering; want javascript vindt geen var met naam gestart

        // property gebruiken => this.  voor propertyname
        if (this.gestart) {
            console.log("vroemvroem");
        }
        else {
            console.log("start de motor eerst!");
        }
    },
    starten: function () {
        this.gestart = true;
        console.log("de motor draait ....");
    },
    gegevens: function () {
        var cabrioMelding = this.cabrio ? "cabrio " : "";
        return cabrioMelding + this.merk + " " + this.model + " uit " + this.bouwjaar;
    }
};

var bouwjaarVanMijnAuto = mijnAuto.bouwjaar;
console.log(bouwjaarVanMijnAuto);
mijnAuto.cabrio = false;
console.log(mijnAuto.cabrio);
mijnAuto.bouwjaar--;
console.log(mijnAuto);
console.log(mijnAuto.kleur);  // undefined
console.log(mijnAuto);
mijnAuto.kleur = "knalrood";
console.log(mijnAuto);
console.log(mijnAuto.kleur);
mijnAuto.rijden();
mijnAuto.starten();
mijnAuto.rijden();

var tmp = mijnAuto.gegevens();
console.log(tmp);