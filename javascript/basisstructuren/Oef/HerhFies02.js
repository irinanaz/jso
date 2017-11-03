'use strict';
var toetsenbord = require('readline-sync');


function zijdeC(x,y){

    return Math.sqrt(x*x+y*y);
}



var a =  parseFloat(toetsenbord.question('Tik een zijde in: '),10);
var b =  parseFloat(toetsenbord.question('Tik een ander zijde in: '),10);
console.log ("Derde zijde is %d cm lang", zijdeC(a,b));
