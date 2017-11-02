'use strict';
var toetsenbord = require('readline-sync');

var zin="";

function woordenInZin(s){
    var woorden=1; 
    for (var i = 0; i < s.length; i++) {
    
        if (s.charAt(i) == " " /*|| s.charAt(i)=="."*/) {
            woorden+=1; }
    } 
    return woorden;
}



zin = toetsenbord.question('Geef een zin in: ');
console.log ("Er zijn %d woorden", woordenInZin(zin));

