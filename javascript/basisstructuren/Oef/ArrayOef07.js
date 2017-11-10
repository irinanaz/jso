'use strict';
var toetsenbord = require('readline-sync');
var evenGetalen = new Array();
var getalen = new Array();

var tmp;
var even=0;

for (var i= 0; i < 10; i++){
    tmp = parseInt(toetsenbord.question("Geef een even getal in:"));
    getalen.push(tmp);
    if (tmp%2==0){
        evenGetalen.push(tmp);
        even+=1;
    }
}
/*console.log("Alle getalen: "+ getalen);*/
console.log("Je gaf %d even getalen.", even);
console.log("Even getalen: "+ evenGetalen);