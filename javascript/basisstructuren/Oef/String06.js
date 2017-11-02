'use strict';
var toetsenbord = require('readline-sync');

var zin="";

function naarAntwerps(s){
    var sA=""; 
    for (var i = 0; i < s.length; i++) {
    
        if (s.charAt(i) == "h") {
            sA += "";
        } else {
            sA += s.charAt(i); }
            
    } 
    
    
    return sA;
}

function naarLimburgs(s){
    var sL=""; 
    for (var i = 0; i < s.length; i++) {
            switch (true) {
                case s.charAt(i) == "a":
                     sL += "aa";
                     break;
                case s.charAt(i) == "o":
                     sL += "oo";
                     break;
                case s.charAt(i) == "e":
                     sL += "ee";
                     break;
                case s.charAt(i) == "i":
                     sL += "ii";
                     break;
                case s.charAt(i) == "u":
                     sL += "uu";
                     break;
            default:sL += s.charAt(i);
            } 
        }
return sL;
}

zin = toetsenbord.question('Geef een zin in: ');
console.log (naarAntwerps(zin));

console.log (naarLimburgs(zin));



