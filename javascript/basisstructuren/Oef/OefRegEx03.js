'use strict';

var toetsenbord = require('readline-sync');

function naarAntwerps(tekst) {
    var nieuweTekst = "";
    var tekst2 = tekst.replace(/([h])/gi,'');
    return tekst2;
}

function naarLimburgs(tekst) {
    var nieuweTekst = "";
    var tekst2 = tekst.replace(/([aeuio]|[AEUIO])/g,'$1$1');
    // of var tekst2 = tekst.replace(/([aeuio])/gi,'$1$1');
    return tekst2;
}

var tekst = toetsenbord.question("Geef een tekst: ");
var antwerps = naarAntwerps(tekst);
var limburgs = naarLimburgs(tekst);
console.log("De antwerpse vertaling is %s", antwerps);
console.log("De limburgse vertaling is %s", limburgs);