'use strict';
var toetsenbord = require('readline-sync');
var uniekeGetallen = new Array (5);
var i=0,getal;

while (i<5){
     getal = parseInt(toetsenbord.question( "Geef een uniek getal in: "));
     if (uniekeGetallen.indexOf(getal)==-1){
         uniekeGetallen[i]=getal;
         i++;
     } else { 
         console.log( "Reeds ingegeven.");
     }
}
console.log (uniekeGetallen);