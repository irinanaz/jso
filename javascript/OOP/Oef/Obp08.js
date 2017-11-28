'use strict';

var toetsenbord = require('readline-sync');
var aantalKoersen = 4;
var referentieKoers =10;
//Constructor
function Fortis(){
    this.koersen=[];
    
    
    
}
Fortis.prototype.koersToevoegen = function (koers){ 
    if (this.koersen.length<aantalKoersen){
        this.koersen.push(koers);
    } else{
        for (var i=1; i<aantalKoersen; i++){
            this.koersen[i-1]=this.koersen[i]
        }
        this.koersen[i-1]=koers;
    }
}
Fortis.prototype.gemKoers = function(){
    var som = 0;
    console.log( bank.koersen);
    for (var i =0; i<this.koersen.length; i++){
       som += this.koersen[i];
    }
    return som/this.koersen.length;
}

Fortis.prototype.geefMaxCoupon = function (){
    var gemKoers = this.gemKoers();
    
    return referentieKoers - gemKoers.toFixed(2);
}
var bank = new Fortis();
var stoppen = false;
var koersTmp;
while (stoppen!="j"){
 koersTmp = parseFloat(toetsenbord.question( "Geef de koers in:   "));
 bank.koersToevoegen(koersTmp);
 stoppen = toetsenbord.question( "Wilt u stoppen (j/n):" ).toLowerCase();
}

console.log( bank.koersen);

console.log("de Maximale waarde is: " , bank.geefMaxCoupon());

/* UITVOER
Geef de koers in:   2
Wilt u stoppen (j/n):n
Geef de koers in:   1.75
Wilt u stoppen (j/n):n
Geef de koers in:   1.85
Wilt u stoppen (j/n):n
Geef de koers in:   2.01
Wilt u stoppen (j/n):n
Geef de koers in:   3
Wilt u stoppen (j/n):j
[ 1.75, 1.85, 2.01, 3 ]
[ 1.75, 1.85, 2.01, 3 ]
de Maximale waarde is:  7.85
*/