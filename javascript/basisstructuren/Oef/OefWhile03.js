'use strict';

var toetsenbord = require('readline-sync');

var mannenJ25 = 0;
var vrouwenJ25 = 0;
var mannen25plus = 0;
var vrouwen25plus = 0;

var geslacht = toetsenbord.question("Geef geslacht in: ");
while ((geslacht = 'm') || (geslacht = 'v')) {
    var lijftijd = parseInt(toetsenbord.question("Geef lijftijd in: "), 10);
    while (lijftijd < 0) {
        console.log("  Geef een correcte lijftijd");
        var lijftijd = parseInt(toetsenbord.question("Geef lijftijd in: "), 10);
    }
    if (geslacht == 'm') {
        if (lijftijd < 25) {
            mannenJ25 = mannenJ25 + 1;
        } else { mannen25plus = mannen25plus + 1; }
    } else {
        if (lijftijd < 25) {
            vrouwenJ25 = vrouwenJ25 + 1;
        } else { vrouwen25plus = vrouwen25plus + 1; }
    }
    
}
console.log(mannenJ25, mannen25plus, vrouwenJ25, vrouwen25plus);

