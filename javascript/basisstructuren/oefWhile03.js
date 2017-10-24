'use strict';
var toetsenbord = require('readline-sync');
var result, geslacht, leeftijd, jongeVrouwen = 0, VrouwenPlus25 = 0, jongeMannen = 0, MannenPlus25 = 0;
geslacht = toetsenbord.question("Geef geslacht (m/v): ");
while ((geslacht == "m") || (geslacht == "v")) {
    leeftijd = toetsenbord.question("Geef leeftijd: ");
    leeftijd = parseInt(leeftijd);
    if (geslacht == "m") {
        if (leeftijd < 25) {
            jongeMannen = jongeMannen + 1;
        }
        else {
            MannenPlus25 = MannenPlus25 + 1;
        }
    }
    else {
        if (leeftijd < 25) {
            jongeVrouwen = jongeVrouwen + 1;
        }
        else {
            VrouwenPlus25 = VrouwenPlus25 + 1;
        }
    }
    geslacht = toetsenbord.question("Geef geslacht (m/v): ");
}
result = "\t<25\t>=25\nmannen\t"+jongeMannen+"\t"+MannenPlus25+"\nvrouwen\t"+jongeVrouwen+"\t"+VrouwenPlus25;
console.log(result);

/*
\t geeft tab-ruimte
\n geeft new line
*/