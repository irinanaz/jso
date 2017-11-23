'use strict';
var toetsenbord = require('readline-sync');
var postCodes = new Array();
var gemeente;

gemeente = toetsenbord.question("Geef gemeente in:  ");
while (gemeente != "stop"){
    if(postCodes[gemeente]==null){
        postCodes[gemeente]=toetsenbord.question("Geef de postcode in:  ");
    } else {
        console.log(postCodes[gemeente]);
        
    }
    gemeente = toetsenbord.question("Geef gemeente in:  ");
}

for (gemeente in postCodes) {  // overloop alle indexen
    console.log(gemeente+": "+ postCodes[gemeente]);
}

