'use strict' ;
var toetsenbord = require('readline-sync');

function bonusMalustrap(bonus, ongevalen){
    var nieuwBonus;
    switch (ongevalen){
        case 0: 
            nieuwBonus=bonus-1;
            break;
        case 1:
            nieuwBonus=bonus+2;
            break;
        default:
            nieuwBonus=bonus+2+3*(ongevalen-1);
    }
    if (nieuwBonus<1){
        nieuwBonus=1;        
    }else {
        if (nieuwBonus>18){
            nieuwBonus=18;
        }
    }

    return nieuwBonus;
}

var huidigeBunus=parseInt(toetsenbord.question("Huidige bonus-malustrap in(1-18): "),10);
var aantOngevalen=parseInt(toetsenbord.question("Aantal ongevalen: "),10);

var bonusM = bonusMalustrap(huidigeBunus, aantOngevalen);
console.log ("Niuwe bonus-malinustrap is %d: ",bonusM);
if (bonusM==18){
    console.log("U moet een andere verzekeringsmaatschappij zoeken.");
}
