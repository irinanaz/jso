'use strict';

var toetsenbord = require('readline-sync');


function celsius(f){
        var c=5.0/9.0*(f-32);
    return c;
}
function fahrenheit(c){
    var f=9.0/5.0*c-32;
    return f;
}


var getal = toetsenbord.question('Tik een getal in: ');

console.log("%d in Celsius is:", getal, celsius(getal));
console.log("%d in Fahrenheit is:", getal, fahrenheit(getal));