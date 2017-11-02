'use strict';
var toetsenbord = require('readline-sync');

var zin, i;
var result ="";

zin = toetsenbord.question('Geef een zin in: ');

for (i=zin.length; i>=0; i--){
    result += zin.charAt(i);
   
}

if (zin==result){
    console.log ( " %s is een polindroom.", zin);
} else {console.log ( " %s is geen polindroom.", zin);}
