'use strict';
var toetsenbord = require('readline-sync');

var breedtes=[60,90,120,150,200];
var gevonden = false;
var jBreedte;


    var breedte = parseInt(toetsenbord.question("Geef een breedte van het raam in: "));
    while (breedte <=0 || breedte > 200) {
        if (breedte <= 0) {
            breedte = parseInt(toetsenbord.question("Geef een geldige breedte van het raam in: "));
        }
        else {breedte = parseInt(toetsenbord.question("We verkopen gordijnen max 200cm breed.\n Geef breedte in: "));
    }

    }
for  (var i = 0; gevonden ==false; i++){
    if ( breedte <=breedtes[i]){
        gevonden = true;
        jBreedte = breedtes[i];
    }
}
console.log("U hebt gordijnen %d cm breed nodig", jBreedte);