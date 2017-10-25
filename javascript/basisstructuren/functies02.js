'use strict';

var toetsenbord = require('readline-sync');

var getal1, getal2, macht;

/* functiedefinities of -declaraties */
function berekenTweedeMacht(getal) {
    var resultaat;
    resultaat = getal * getal;
    return resultaat;
}
function berekenMacht (grondtal, exponent){
    var resultaat=1;

    for(var i=1; i<=exponent; i++){
        resultaat*=grondtal;
    }
    return resultaat;
}


function berekenMacht(grondtal, exponent){
    var resultaat = 1;
    for(var i=1; i<= exponent; i++){
        resultaat *= grondtal;
    }
    return resultaat;
}

/* de volgorde en plaats van de functiedefinities is onbelangrijk */

// functies oproepen ("gebruiken")
getal1 = toetsenbord.question("Geef eerste getal: ");
macht = berekenTweedeMacht(getal1) ;
console.log("Het getal %d vermenigvuldigd met zichzelf is %d", getal1, macht);
getal2 = toetsenbord.question("Geef tweede getal: ");
macht = berekenTweedeMacht(getal2);
console.log("Het getal %d vermenigvuldigd met zichzelf is %d", getal2, macht);
<<<<<<< HEAD
macht = berekenTweedeMacht(getal1,getal2);
console.log("%d tot de %de macht is%d ", getal1, getal2, macht);
/*macht = berekenMacht(getal1+1,2*getal2+8);
console.log(macht);*/

// in Javascript kan je functies op roepen voor dat je die defineerd
=======
macht = berekenMacht(getal1-1, getal2);   // als argument mag een berekening doorgegeven worden
console.log("%d tot de %de macht is %d", getal1, getal2, macht); 
>>>>>>> 2b7e56baaa74898c895a8a7fd2cba044451847c7
