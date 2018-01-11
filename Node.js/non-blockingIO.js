/* vooraf:  verifieer dat bestand bestanden/input.txt bestaat */

var fs = require("fs");
console.log("Starting read from file");
fs.readFile('bestanden/input.txt', function (err, data) {  // asynchrone broer van readFileSync.
    // function (err -als er iets miss gaat, data - de data van de file zelf)
    // als je later klaar bent doe die functie-body(hier console.log...)
    // syncrone functies:
    if (err) {
    	return console.error(err);
    	}
    console.log(data.toString()); 
});

/* in de output verschijnt onderstaande zin (hoogstwaarschijnlijk) voor de inhoud van input.txt*/ 
// asynchrone instructies:
console.log("Program Ended");   // sneller op shcerm dan de file gelezen wordt.



// output:

// Starting read from file
// Program Ended    
// jantje zag eens pruimen hangen
// o, als eieren zo groot
// 't schijnt dat hij ze wilde plukken
// ofschoon zijn moeder 't hem verbood