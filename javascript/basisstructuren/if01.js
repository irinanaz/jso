'use strict';

var datum = new Date();
var uur = datum.getHours(); // vraagt een huidige datum en tijd,.nl. de uren hier. Zet de Uur in datum variabele en geeft de waarde aan datum. 
if (uur < 12) { // na IF altijd met de ronde haken
	console.log("Goedemorgen");
} else {
	console.log("Goedenamiddag");
}