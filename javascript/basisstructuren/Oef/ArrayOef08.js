'use strict';
var toetsenbord = require('readline-sync');
var getalen= ["Nul","Een","Twee","Drie","Vier","Vijf","Zes","Zeven","Acht","Negen"];


var cijfer = parseInt(toetsenbord.question("Geef een cijfer van 0 tot 9 in:  "));
console.log (cijfer);
console.log(getalen[cijfer]);
