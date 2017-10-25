'use strict';

var toetsenbord = require('readline-sync');

var bank = toetsenbord.question('Wat is jouw bank: ');
var bedrag = parseFloat(toetsenbord.question('Tik bedrag in: '),10);

function rente(x){
    return x*1.04;
}

console.log("Bij %s bedragt het rentebedrag %d EUR. Het totaalbedrag is %d EUR.", bank, rente(bedrag)-bedrag,rente(bedrag));

