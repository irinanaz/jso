'use strict';

var smurf // undefined, geen waarde gekregen;

console.log(1+1);  // 2
console.log("1"+1); // 11
console.log(2*"10");  // 20 Js maakt een getal van string 10 en berekent
console.log(2*"smurf");  // NaN Js kunt geen getal maken van string smurf -> geeft een bericht NaN  Not a Number
console.log(5/0);   // Infinity -> oneindig - delen door NUL
console.log(smurf);   // undefined

// we mogen (sleutelwoord) null toekennen aan een var
// om aan te geven dat die var momenteel geen bruikbare waarde bevat
smurf = null; //gedefineerd maar als niets
console.log(smurf); // null