'use strict';
var bestemmingen1 =["De zee", "Het strand","De kust"];
var bestemmingen2;
//poging 1 (foute - geen kopie )
//bestemmingen2 = bestemmingen1;// dat maakt geen kopie, maar maakt bestemmingen2 naar bestemmingen1 te verwijzen, verwijzen naar één adres.

//poging 2 - ok
//bestemmingen2 = new Array(bestemmingen1.length);
//for (var i=0; i< bestemmingen1.length; i++){
//bestemmingen2[i] = bestemmingen1[i];
//}

//poging 3 - ok

// bestemmingen2 = new Array(bestemmingen1.length);
// bestemmingen2 = bestemmingen1.slice();

// 3 maar korter -ok
// bestemmingen2 = bestemmingen1.slice(); // want slice geeft een NEW array terug .

// poging 4 - ok
// bestemmingen2 = [];
// bestemmingen2 = bestemmingen2.concat(bestemmingen1);

// poging 5 -ok - mij
//gevraagd: zorg ervoor dat bestemmingen2 een kopie is van bestemmingen1.
bestemmingen2 =[];
for (var i=0; i< bestemmingen1.length; i++){
    bestemmingen2.push(bestemmingen1[i]);
    /*console.log (bestemmingen2[i]);*/
}
console.log(bestemmingen1);
console.log(bestemmingen2);

//test
bestemmingen1[0] ="Hoboken";
console.log(bestemmingen1[0]);
console.log(bestemmingen2[0]);