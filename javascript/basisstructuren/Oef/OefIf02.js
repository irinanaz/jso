'use strict';
var naam='';
var lijftijd=0;
var toetsenbord = require('readline-sync');

naam = toetsenbord.question('Geef jouw naam in:  '); 
lijftijd = toetsenbord.question(' Geef jouw lijftijd in: ');

if (lijftijd>=14){
console.log("Sorry, deze pagina is enkel voor kinderen.");
} else {
console.log("Welkom %s", naam);
}