'use strict';
var toetsenbord = require('readline-sync');

var punten = parseInt(toetsenbord.question('Geef de punten in( tss 0 en 20):  '),10); 


switch (punten) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        console.log("Onvoldoende");
        break;
    case 10:
    case 11:
    case 12:
    case 13:
        console.log("Voldoende");
        break;
    case 14:
    case 15:
        console.log("Onderscheiding");
        break;
     case 16:
     case 17:
        console.log("Grote onderscheiding");
        break;
    case 18:
    case 19:
    case 20:
        console.log("Grootste onderscheiding");
        break;
    default:
        console.log("Ongeldige score.");
}