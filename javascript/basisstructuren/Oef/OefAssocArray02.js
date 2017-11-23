'use strict';
var toetsenbord = require('readline-sync');
var woorden = new Array();
var woord;
var aantalWoorden=0;
var aantalKarakters;

var zin = toetsenbord.question("Geef een zin in:  ");
var tmpZin = zin.toLowerCase();
tmpZin = tmpZin.replace(/([,"':;])/g," ");
tmpZin = tmpZin.replace(/([.?!])/g,"");
console.log (tmpZin);
tmpZin = tmpZin.replace(/ {2,}/g," ");
console.log (tmpZin);

var einde = false;
while (einde==false){
    
    woord = tmpZin.substr(0,tmpZin.indexOf(" "));
    
    aantalWoorden ++;
    // console.log(aantalWoorden);
    // console.log(woord);
    // console.log(tmpZin);
    
    if(woorden[woord]==null){
        woorden[woord]=1;
    } else {
        woorden[woord]+=1;
        
    }
    if (tmpZin.indexOf(" ")==-1){
        einde=true
    }else{
        tmpZin = tmpZin.substr(tmpZin.indexOf(" ")+1);}

}

console.log ("Aaantal woorden: %d", aantalWoorden);
console.log ("Aantal karakters: %d", zin.length);

   
console.log("woord\t voorkomen")
for (woord in woorden) {  // overloop alle indexen
    console.log(woord+ "\t\t"+ woorden[woord]);
}