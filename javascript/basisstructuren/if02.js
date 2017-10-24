'use strict';

var datum = new Date();
var uur = datum.getHours();
if (uur == 9) {// == vergelijking. === kijkt naar het zelfde type, en als ja dan vergelijkt verder.=== past de types niet.
	console.log("Tussen 9 en 10 kan je eens naar koffie zien");
} else if (uur == 12) {
	console.log("Tussen 12 en 1 eet iedereen");
} else if (uur == 18) {
	console.log("Tussen 6 en 7 begint een werkmens te leven");
} else {
	console.log("Werk maar rustig verder");
}

if (uur!=12) {
	console.log("de middagpauze is niet bezig");
}else{
	console.log('het is middagpauze');
}
if (uur>=9 && uur<=12) { // AND 
	console.log("de werkvoormiddag is bezig");
}

if (uur<9 || uur>12) {  // OF
	console.log("buiten de werkuren");
}