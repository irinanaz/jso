'use strict';

var toetsenbord = require('readline-sync');
var getal = toetsenbord.question('Tik een getal in: ');

// gebruik functie isNaN om te controleren of een waarde geconverteerd kan worden naar een numerieke waarde
//if (isNaN(getal) == true) {
// korter:
if (isNaN(getal)) { // functie isNaN controleert of een invoer een getal is. Geeft True of Alse terug.
    console.log("%s is geen getal", getal); // True -> not a number dat is waar.
}
else {
    console.log("U hebt getal %d ingetikt.", parseFloat(getal)); // wel een getal = False
}

// waarde NaN (Not a Number) stelt iets voor dat niet voorgesteld kan worden in de verzameling van de reële getallen incl oneindig ("R streep") 
// (bv imaginair getal, 0/0, iets dat geen getal is)

console.log("5/0 = %s", 5 / 0); //Delen door 0 is Oneindig
console.log("0/0 = %d", 0 / 0); // Nul delen door nul is ongeldig
console.log("isNaN(5/0) = %s", isNaN(5 / 0)); 
console.log("isNaN(0/0) = %s", isNaN(0 / 0));
console.log("isNaN(false) = %s", isNaN(false));

if (NaN != NaN) { // 
    console.log("Weetje: NaN != NaN");
}
else {
    console.log("Weetje: NaN == NaN");
}

/*  uitvoer:
...
5/0 = Infinity
0/0 = NaN     
isNaN(5/0) = false                                                                                                                         
isNaN(0/0) = true                                                                                                                      
isNaN(false) = false                                                                                                                   
Weetje: NaN != NaN 
*/