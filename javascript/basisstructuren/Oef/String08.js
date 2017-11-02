'use strict';
var toetsenbord = require('readline-sync');


function belgischeNaam(vNaam,aNaam){
    var naam = aNaam.concat(", ",vNaam);

    return naam;
}
function nederlandseNaam(vNaam,aNaam){
    
var pos = aNaam.lastIndexOf (" ");
var eerstedeel = aNaam.substring(0,pos);
var tweededeel =aNaam.substring(pos,aNaam.lenght);
if (pos== -1)
{naam = tweededeel.concat(", ",vNaam);
} else {
var naam= tweededeel.concat(", ", eerstedeel, ", ",vNaam);
}
return naam;

} 

var voorNaam = toetsenbord.question('Geef uw voornaam in: ');
var achterNaam = toetsenbord.question('Geef uw achternaam in: ');

console.log (belgischeNaam(voorNaam,achterNaam));
console.log (nederlandseNaam(voorNaam,achterNaam));