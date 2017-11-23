'use strict';

var toetsenbord = require('readline-sync');

var lijst = new Array();  // naam geven, difineren , maar nog  geen waarde geven; Lege array.
var naam;  // index voor assoc array. Geen getal, maar een string.
for (var i = 0; i < 5; i++) {
    naam = toetsenbord.question("Geef een naam: ");
    if (lijst[naam] == null) lijst[naam] = 0;  // null --> die index wordt nog niet gebruikt
    lijst[naam]++;
}
for (naam in lijst) {  // overloop alle indexen
    console.log("%s komt %d keer voor.", naam, lijst[naam]);
}