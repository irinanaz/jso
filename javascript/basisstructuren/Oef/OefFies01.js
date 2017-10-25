'use strict';

var toetsenbord = require('readline-sync');

var getal1 = toetsenbord.question('Tik een getal in: ');
var getal2 = toetsenbord.question('Tik nog een getal in: ');

function max( a,b){
    if (a>b){
        var grootste =a;
    }else {
        var grootste=b;
    }
    return grootste;
}

console.log("Grootste van %d en %d is:", getal1, getal2, max(getal1,getal2));

var toetsenbord = require('readline-sync');

// var getal1 = toetsenbord.question('Tik een getal in: ');
//var getal2 = toetsenbord.question('Tik nog een getal in: ');
var getal3 = toetsenbord.question('Tik nog een getal in: ');

var max3=max(max(getal1,getal2),getal3);
console.log("Grootste van %d,  %d en %d is:", getal1, getal2, getal3, max3);