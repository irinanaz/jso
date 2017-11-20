'use strict';
var toetsenbord = require('readline-sync');

var zin, i;
var result ="";

zin = toetsenbord.question('Geef een zin in: ');
//var expressie = new RegExp (" ","g");

var zin2 = zin.replace(/( +)/g,' '); 

console.log(zin2) ;