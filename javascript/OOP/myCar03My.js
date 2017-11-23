'use strict';

// CONSTRUCTOR -->

function Auto(merk, model){
    this.merk = merk;
    this.model = model;
    this.cabrio = false;
    this.bouwjaar = new Date().getFullYear();
    this.gestart = false;
    // methodes zijn dezlefde voor alle autos - 
    //we moeten ze niet voor elk auto apart schrijven en onthouden.
   // --> hier koomt    
    };
    
    Auto.prototype.starten = function(){
        this.gestart= true;
        console.log("de motor draait...");
    };
    Auto.prototype.rijden= function (geluid){   
        var tmp= this.gegevens();
        console.log("ik vertrek met mijn %s", tmp)  ;   
        if (this.gestart==true){ 
        console.log(geluid);
        }    
    };
    
    Auto.prototype.gegevens = function (){
        var cabrio = this.cabrio ? "Cabrio " : "";
        // console.log ("Mijn auto: %s, %s, %s%s",this.merk,this.model,this.bouwjaar,cabrio);
        return "Mijn auto: "+cabrio + this.merk+ ", "+this.model+", uit "+this.bouwjaar+".";
    };
    

// objecten maken met constructor
var auto1 = new Auto("BMW","X6");
console.log (auto1);

// merk opvragen:
console.log(auto1.merk + " "+ auto1.model);
auto1.starten();
auto1.rijden("broembroem");
console.log(auto1.gegevens());

var auto2 = new Auto ("Audi", "A6");
auto2.cabrio = true;
console.log (auto2);
auto2.starten();
auto2.rijden("tuuttuut");
auto2.kleur = "safierzwart"; // enkel voor de audi een nieuwe eigenschap

console.log(auto1);
console.log(auto2);