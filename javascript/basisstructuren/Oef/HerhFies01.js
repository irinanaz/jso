'use strict';
var toetsenbord = require('readline-sync');


function oppCirkel(r){

    return Math.PI*r*r;
}

function omtrekCirkel(r){
    
        return Math.PI*r*2;
}

var straal =  parseFloat(toetsenbord.question('Tik een straal in: '),10);
console.log ("De oppervlakte is %d cm²", oppCirkel(straal));
console.log ("De omtrek is %d cm.", omtrekCirkel(straal));