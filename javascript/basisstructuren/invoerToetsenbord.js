/*
 * invoer lezen van console
 * 
 * vooraf: module readline-sync installeren om invoer van de console te kunnen lezen.
 * cmd-prompt, [projectfolder]: npm install readline-sync 
 */

'use strict';

var toetsenbord = require('readline-sync'); // roept de readline-sync module op - toe laat de invoer van de toetsenboord

var voornaam = toetsenbord.question('Tik je voornaam in:  '); //geeft een string terug aan variabele voornaam
var naam = toetsenbord.question('Tik je familienaam in:  ');

console.log('Welkom, %s %s!' , voornaam, naam); //%s dat is een plaatshouder voor de variabele die achter komt
console.log('Welkom ,' + voornaam + ' '+ naam +'!');
// opm:  console.log:  eerste param = formatstring met plaatshouders, 
// params waarvoor geen plaatshouder voorzien is, worden geconcateneerd met formatstring;
// console.log voegt achteraan \n toe

/*  plaatshouders in formatstring:
%s converts the argument to a String value
%d converts the argument to a double value
%i converts the argument to a integer value
%f converts the argument to a floating point number
%o converts the argument to an Object
*/