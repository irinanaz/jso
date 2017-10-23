'use strict';  
var getal1;
var getal2;
var product;
var toetsenbord = require('readline-sync'); // roept de readline-sync module op - toe laat de invoer van de toetsenboord

var getal1 = toetsenbord.question('Geef getal1 in:  '); 
var getal2 = toetsenbord.question('Geef getal2 in:  ');
product = parseFloat(getal1)*parseFloat(getal2);
console.log('Het product van %f, en, %f, is %f', getal1, getal2, product);