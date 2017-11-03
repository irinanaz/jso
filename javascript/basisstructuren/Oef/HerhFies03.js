'use strict';
var toetsenbord = require('readline-sync');

var a,b, c;

function discriminant(ca,cb,cc) {
    var d = (ca*ca-4*ca*cc);
   
    return d;
}
function nulPunten(d){
    var b="";
    switch (true) {
        case d<0 :
            b="Geen Nulpunten";
            break;
        case d==0 :
            b="Eén nulpunt";
            break;
        case d>0 :
            b="Twee nulpunten.";
        default:;
    }
return b;
}



a =  parseFloat(toetsenbord.question('Tik a in: '),10);
b =  parseFloat(toetsenbord.question('Tik b in: '),10);
c =  parseFloat(toetsenbord.question('Tik c in: '),10);
console.log ("tweedegraadsvergelijking %dx² + %dx + %d", a,b,c);
console.log ("Discriminant is %d.", discriminant(a,b,c));
console.log(nulPunten(discriminant(a,b,c)));
