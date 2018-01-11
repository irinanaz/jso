/* vooraf:  verifieer dat bestand bestanden/input.txt bestaat */
/* syncroone inlees van een file */
/* asynchrone in file non-blocking.js */

var fs = require("fs");

console.log("Starting read from file");

var data = fs.readFileSync('bestanden/input.txt'); //lees een bestand in en geef die op het scherm. Synchroon.

console.log(data.toString());

/* in de output verschijnt onderstaande zin na de inhoud van input.txt*/
console.log("Program Ended");

/* output:  */

// Starting read from file
// jantje zag eens pruimen hangen
// o, als eieren zo groot
// 't schijnt dat hij ze wilde plukken
// ofschoon zijn moeder 't hem verbood
// Program Ended