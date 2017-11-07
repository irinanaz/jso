'use strict';

var KOEF=0.62137;
var toetsenbord = require('readline-sync');

function mijlenNaarKm(mijlen){
    return mijlen*KOEF;
}

function leesEenheid (){
   var eenheid = toetsenbord.question("geef eenheid (tik K,k,M of m): ");
   while (eenheid.toUpperCase() != "K" && eenheid.toUpperCase() != "M"){
        eenheid = toetsenbord.question("Geef eenheid (tik K,k,M of m):");
   }
   return eenheid.toLocaleUpperCase();
}

function boeteBijSnelheid (gegToegelatenSnelheid, gemetenSnelheid,eenheid){
    var resultaat=0;
    if (eenheid=="M"){
        gegToegelatenSnelheid=mijlenNaarKm(gegToegelatenSnelheid);
        gemetenSnelheid=mijlenNaarKm(gemetenSnelheid);
    } 
    var overtreding = Math.abs(gegToegelatenSnelheid - gemetenSnelheid);//ubrat abs i v pervy case dobavit <0
    switch (true) {
        case overtreding == 0: 
                resultaat = 0;
                break;
        case overtreding<10: 
                resultaat = 50;
                break;
        case overtreding<=30:
                resultaat= 50+ (overtreding-10)*10;
                break;
        case overtreding>30:
                resultaat = "dagvaarding";
                break;
        default:;

    }


    return resultaat;
}

/*var afstand_in_mijlen=toetsenbord.question("geef afstand in mijlen, aub: ");
var afstand_in_km = mijlenNaarKm(afstand_in_mijlen);
console.log (afstand_in_km);*/
var boete, gegToegSnelheid, gemSnelheid;
var  berekening="J";

while ( berekening.toUpperCase() == "J"){
gegToegSnelheid=parseInt(toetsenbord.question("Geef toegelaten snelheid in: "),10);
gemSnelheid=parseInt(toetsenbord.question("Geef gemeten snelheid: "),10);
boete = boeteBijSnelheid (gegToegSnelheid, gemSnelheid, leesEenheid());
console.log (boete);
berekening = toetsenbord.question("Wilt u nog een boete berekenen? Toets 'j' of 'J' voor JA");

}

