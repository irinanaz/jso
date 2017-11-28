'use strict';

var toetsenbord = require('readline-sync');
var aantalKoersen = 4;
var referentieKoers =10;

//Constructor
function Fortis(){
    this.koersen=[];
    
    
    
};
Fortis.prototype.koersToevoegen = function (koers){ 
    if (this.koersen.length<aantalKoersen){
        this.koersen.push(koers);
    }
}
Fortis.prototype.gemKoers = function(){
    var som = 0;
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

