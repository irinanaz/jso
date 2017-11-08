'use strict';

var toetsenbord = require('readline-sync');
var punten = toetsenbord.question("punten: ");
var graad = "";
switch (true) {  //case vergelijkt de 'punten<0' of dat juist is
    case punten < 0:
    case punten > 20:
        graad = "ongeldige score";
        break;
    case punten < 10:
        graad = "Onvoldoende";
        break;
    case punten < 14:
        graad = "Voldoende";
        break;
    case punten < 16:
        graad = "Onderscheiding";
        break;
    case punten < 18:
        graad = "Grote Onderscheiding";
        break;
    default:
        graad = "Grootste Onderscheiding";
}
console.log(graad);