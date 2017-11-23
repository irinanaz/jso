'use strict';

// CONSTRUCTOR -->

function Hond(naam, ras, gewicht){
    this.naam = naam;
    this.ras = ras;
    this.gewicht = gewicht;
       
    };
    
   
    Hond.prototype.blaf = function (){   
        switch (true){ 
            case this.gewicht < 10 :  return "kefkefkefkef"; break;
            case this.gewicht > 30 : return "WOEF WOEF"; break;
            default: return "waf";
        }  
    };
    

// objecten maken met constructor
var fido = new Hond("Fido","beagle", 38);
console.log (fido);
var fluffy = new Hond("Fluffy","poedel", 30);
console.log (fluffy);
var flavie = new Hond("Flavie","chihuahua", 9.5);
console.log (flavie);
var honden = [fido, fluffy, flavie];

for (var i = 0; i<honden.length; i++){
    var size =" kleine";
    if (honden[i].gewicht>10){
        size = "grote";
    }
    console.log(honden[i].naam + "is een "+ size +" "+ honden[i].ras);
    console.log(honden[i].blaf());
}


