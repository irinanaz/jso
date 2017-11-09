'use strict';

var toetsenbord = require('readline-sync');

// array met ruimte voor 5 elementen maken
var lijst = new Array(5);
for (var i = 0; i < lijst.length; i++) {
    lijst[i] = toetsenbord.question("Geef een tekst: ");
}
lijst.sort(); // sorteert in de lijst zelf, dus overschrijft ongesoorteerde lijst met de nieuwe gesoorteerde;
                // arrays zijn strings. Dus sort() sorteert getalen als strings.
console.log("dit zijn de gesorteerde gegevens: ");
for (var i = 0; i < lijst.length; i++) {
    console.log(lijst[i]);
}
console.log(lijst.toString()); //lijst gescheiden door komma's