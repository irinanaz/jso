'use strict';
var toetsenbord = require('readline-sync');

var zin, i;
var result ="";

zin = toetsenbord.question('Geef een zin in: ');
//var expressie = new RegExp (" ","g");

var zin2 = zin.replace(/( +)/g,' '); 

console.log(zin2) ;

//reguliere expressies zijn "greedy" - ze zoeken zo lang mogelijk naar de substrings volgens de patroon.
console.log( "banaaaaaaan".replace(/a{2,}/g,"***"));//ban***n
// zoekt minstens 2 aa  na elkaar {2,}
console.log( "banaaaaaaan".replace(/a{2,}?/g,"***"));//ban*********an
// met ? woordt de {2,} gestopt . zo zoekt {2,0} zo kort mogelijken dan opnieuw. dus min 2 a,en dan nog eens 2 a.