'use strict';

var toetsenbord = require('readline-sync');
var aantal =5;
var 
//Constructor

function Tankbeurt(){


};

var tankbeurten =[];

// Begroting.prototype.voegUitgaveToe = function (bedrag){ 
//     this.uitgaven.push(bedrag);
//     console.log(this.uitgaven);
// }

function 
    for (var i=1; i<=aantal; i++){
        
        tankbeurten[i] = new Tankbeurt();
        tankbeurten[i].hoeveelLiter= toetsenbord.question("Hoeveel liter getankt: ");
        tankbeurten[i].hoeveelKM = toetsenbord.question("Hoeveel km gereden: ");
        console.log(tankbeurten[i]);
    }
    




