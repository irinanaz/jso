/*
 * invoer lezen van console
 * 
 * vooraf: module readline-sync installeren om invoer van de console te kunnen lezen.
 * cmd-prompt, [projectfolder]: npm install readline-sync 
 */

var toetsenbord = require('readline-sync');

var voornaam = toetsenbord.question('Tik je voornaam in:  ');
var naam = toetsenbord.question('Tik je familienaam in:  ');

console.log('Welkom, %s %s!' , voornaam, naam);
// opm:  console.log:  eerste param = formatstring met plaatshouders, 
// params waarvoor geen plaatshouder voorzien is, worden geconcateneerd met formatstring;
// console.log voegt achteraan \n toe