'use strict';
var toetsenbord = require('readline-sync');

var namen = new Array(5);

for (var i= 0; i<5; i++){
    namen[i]= toetsenbord.question("Geef een naam:");
}
console.log(namen.sort());