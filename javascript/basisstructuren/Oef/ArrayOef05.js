'use strict';
var toetsenbord = require('readline-sync');

var namen = new Array ();
var i=0;

var tmpNaam = toetsenbord.question( " Naam: ");
while (  i<10 || tmpNaam!=""){
   namen.push(tmpNaam);
    i++;
    tmpNaam = toetsenbord.question( " Naam: ");     
}
console.log (namen);
var pos = parseInt(toetsenbord.question( "Op welke positie zoekn? "));
if ((pos-1)>-1 && (pos-1)< namen.lenght ){
    console.log(namen[pos-1]);
} else console.log ("fout");