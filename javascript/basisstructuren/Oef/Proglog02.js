'use strict';

var toetsenbord = require('readline-sync');

var bank = toetsenbord.question('Wat is jouw bank: ');
var bedrag = parseFloat(toetsenbord.question('Tik bedrag in: '),10);

function rente(x){
    return x*1.04;
}

if( bank.toUpperCase()=="KAUPTHING") {
    console.log("U kunt voorlopig uw geld (%d EUR) niet opvragen.",bedrag);
}else {
    console.log("Bij %s bedragt het rentebedrag %d EUR. Het totaalbedrag is %d EUR.", bank, rente(bedrag)-bedrag,rente(bedrag));

}


/*var msg = bank.toUpperCase()=="KAUPTHING" ? 
("Bij %s bedragt het rentebedrag %d EUR. Het totaalbedrag is %d EUR.", bank, rente(bedrag)-bedrag,rente(bedrag)) : 
("U kunt voorlopig uw geld (%d EUR) niet opvragen.",bedrag);
console.log(msg);---> zo werkt niet want een print sitax werkt enkel voor console.log*/
