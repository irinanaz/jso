'use strict';

var toetsenbord = require('readline-sync');
//var wisselkoers = 40.3399

function BEFnaarEURO(x){
        var xinEuro=x/40.3399; // wisselkoers
    return xinEuro;
}
function EUROnaarBEF(y){
    var xinBef=y*40.3399;  // wisselkoers
    return xinBef;          // mag ook zo: reteurn y*wisselkoers, en vorige lijn moet dan weg;
}

var bef = toetsenbord.question('Tik prijs voor een liter melk(in BEF) in: ');
console.log("De brijs voor een liter melk in EURO is: %d", BEFnaarEURO(bef));

var euro = toetsenbord.question('Tik prijs voor een brood (in EURO) in: ');
console.log("De brijs voor een een brood in BEF is: %d", EUROnaarBEF(euro));