'use strict';  
var getal1;
var getal2;
var product;
var loon;
var verhoging;
var nieuwloon;
var toetsenbord = require('readline-sync'); // roept de readline-sync module op - toe laat de invoer van de toetsenboord

var getal1 = toetsenbord.question('Geef getal1 in:  '); 
var getal2 = toetsenbord.question('Geef getal2 in:  ');
product = parseFloat(getal1)*parseFloat(getal2);
console.log('Het product van %s en %s is %s', getal1, getal2, product);

var loon = toetsenbord.question('Geef jouw loon in:  '); 
var verhoging = toetsenbord.question('Geef een verhoging in:  ');
nieuwloon = parseFloat(loon)+parseFloat(verhoging);
console.log('Jouw loon van %s met verhoging %s is %s', loon, verhoging, nieuwloon);
