'use strict';
// script berekent de faculteet van een getal. n!.
var toetsenbord = require('readline-sync');
var getal = toetsenbord.question('Tik een getal in: ');

// wat doet onderstaand script?
var resultaat = 1;
for (var i = 2; i <= getal; i++) {
    resultaat *= i;
}

console.log(resultaat);
// functie defineren met de naam en parameters: 
function faculteit (x){
    var result =1;  // anders dan in hoofd programma
    for(var j = 2; j <= x; j++){
        result*=j;
    }
    return result; // uitkomst van deze functie
}

// functie oproepen:
resultaat=faculteit(getal); // functienaam met de parameter
console.log(resultaat);

resultaat=faculteit(10);
console.log(resultaat);

console.log(faculteit(10));
if (faculteit(10)>30000){
    console.log('10! is groeter dan 30000');

}