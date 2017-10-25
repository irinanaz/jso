'use strict';

var toetsenbord = require('readline-sync');

var bank = toetsenbord.question('Wat is jouw bank: ');
var bedrag = parseFloat(toetsenbord.question('Tik bedrag in: '),10);

/*function rente(x){
    return x*1.04;
}

*/

/*
if( bank.toUpperCase()=="KAUPTHING") {
    bedrag = bedrag >20000? 20000: bedrag;
    console.log("%s geeft %d EUR terug",bank ,bedrag);
}else {
    console.log("%s geeft %d EURterug.", bank,bedrag);

}*/
var maar="";
if( bank.toUpperCase()=="KAUPTHING") {
    if (bedrag >20000){
        bedrag = 20000; 
        var maar=" maar";
    }

    console.log("%s geeft %s%d EUR terug",bank ,maar ,bedrag); // bank.toLowerCase()
}else {
    console.log("%s geeft %d EURterug.", bank,bedrag);

}