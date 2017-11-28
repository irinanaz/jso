'use strict';

function Werknemer(naam) {
    this.naam = naam;
    this.werkuren = [0, 0, 0, 0, 0];
}

Werknemer.prototype.werkUrenPerWeek = function () {
    var som = 0;
    for (var i = 0; i < this.werkuren.length; i++) {
        som += this.werkuren[i];
    }
    return som;

    // of met een arrow fie:
    // return this.werkuren.reduce( (som, w) => som+w);
}

Werknemer.prototype.aantalOveruren = function () {
    return this.werkUrenPerWeek() - 37;
}

Werknemer.prototype.wijzigWerkuren = function (dag, uren) {
    this.werkuren[dag] = uren;
}

var toetsenbord = require('readline-sync');
var naam = toetsenbord.question('Naam werknemer: ');
var werknemer = new Werknemer(naam);
var uren;
for (var i = 0; i < 5; i++) {
    uren = parseFloat(toetsenbord.question('Werkuren voor dag ' + i + ': '));
    werknemer.wijzigWerkuren(i, uren);
}
console.log('%s heeft deze week %d uren gewerkt. Dit betekent dat hij/zij %d overuren gepresteerd heeft.',
    werknemer.naam, werknemer.werkUrenPerWeek(), werknemer.aantalOveruren());
if (werknemer.werkUrenPerWeek() < 37) {
    console.log('Minder dan 37 uren gewerkt');
}

