'use strict';
var toetsenbord = require('readline-sync');
var uniekeGetallen = new Array (5);
var i=0,getal;

function sorteren(getallen){
    var tmp = new Array;
    var tmpGetal = getallen[0];
    for (var i=1; i < getallen.lenght(); i++){
        if (tmpGetal <= getallen[i]){
            tmp.push(getallen[i]);
            tmp=geta[i];
        }
    }

    return tmp;
}

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

sorteren(uniekeGetallen);