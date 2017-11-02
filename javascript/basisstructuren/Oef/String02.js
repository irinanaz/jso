'use strict';
var toetsenbord = require('readline-sync');


var lengte=0;
var zin = toetsenbord.question('Geef een zin in (min 14 karakters): ');

while(zin.length < 14) {
    
    zin = toetsenbord.question('Geef een zin in (Dat moet min 14 karakters): ');
    
}
