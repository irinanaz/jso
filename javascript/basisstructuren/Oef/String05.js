'use strict';
var toetsenbord = require('readline-sync');

var zin, i;
var result = "";

zin = toetsenbord.question('Geef een zin in: ');

for (i = 0; i < zin.length; i++) {

    if (zin.charAt(i) == "g") {
       
        result += "h";
    } else
        if (zin.charAt(i) == "h") {
            
            result += "g";
        }
        else {
            result += zin.charAt(i);
        }
}

console.log(result);