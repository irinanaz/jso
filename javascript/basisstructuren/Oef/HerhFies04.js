'use strict' ;
var toetsenbord = require('readline-sync');

function schrikkeljaar(j) {
    var sjaar="";
    if (j%4==0){
        sjaar="ja";
        if (j%100==0){
            sjaar="neen";
            if (j%400==0){
                sjaar="ja";
               }
            }
    }else{ 
        sjaar="neen";
   }
 return sjaar;
}

var jaar=parseInt(toetsenbord.question("geef jaar in: "),10);
console.log(schrikkeljaar(jaar));
