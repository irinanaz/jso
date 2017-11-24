'use strict';

var toetsenbord = require('readline-sync');
var aantal =5;
//Constructor

function Tankbeurt(){


};

var tankbeurten =[];

// Begroting.prototype.voegUitgaveToe = function (bedrag){ 
//     this.uitgaven.push(bedrag);
//     console.log(this.uitgaven);
// }


    for (var i=1; i<=aantal; i++){
        var beurt="beurt"+i;
        beurt = new Tankbeurt();
        beurt.hoeveelLiter= toetsenbord.question("Hoeveel liter getankt: ");
        beurt.hoeveelKM = toetsenbord.question("Hoeveel km gereden: ");
        console.log(beurt);
    }
    




console.log (beurt1);
console.log (beurt2);
console.log (beurt3);
console.log (beurt4);
console.log (beurt5);