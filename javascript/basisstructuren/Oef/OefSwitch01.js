'use strict';
var toetsenbord = require('readline-sync');

var getal1 = toetsenbord.question('Geef een getal in:  '); 
var getal2 = toetsenbord.question('Geef een getal in:  ');
var operator = toetsenbord.question('Geef een operator in (+,-,* of /):  ');

switch (operator) {
    case '+':
   
        console.log(getal1,' + ',getal2,' = ', parseInt(getal1)+parseInt(getal2));
        break;
    case '-':
    console.log(getal1,'- ',getal2,' = ',parseInt(getal1)-parseInt(getal2));
        break;
    case '*':
    console.log(getal1,'- ',getal2,' = ',parseInt(getal1)*parseInt(getal2));
    break;
    case '/':
        if (getal2!=0) // gedeeld door 0 te vermijden
            {console.log(getal1,' / ',getal2,' = ',parseInt(getal1)/parseInt(getal2));}
        break;
    default:
        console.log("Deze operator ken ik niet.");
}