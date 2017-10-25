'use strict';

var toetsenbord = require('readline-sync');
var ruimte="";
var aantal = parseInt(toetsenbord.question('Hoe veel steren? '),10);
for (var i=0;i<aantal;i++) {

    console.log("%s*",ruimte);
    ruimte=ruimte+" ";
}