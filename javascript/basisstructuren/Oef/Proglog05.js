'use strict';

var toetsenbord = require('readline-sync');
var ruimte="";
var aantal = parseInt(toetsenbord.question('Hoe veel steren? '),10);
/*for (var i=0;i<aantal;i++) {

    console.log("%s*",ruimte);
    ruimte=ruimte+" ";
}
ruimte="";*/
var kant="*";
if (aantal>0){
    console.log('*');
    for (var i=0;i<(aantal-2);i++) {
    
        console.log("*%s*",ruimte);
        ruimte=ruimte+" ";
        var kant=kant+'*';
    }
    console.log('*%s',kant);
}else {console.log("foutive invoer");}