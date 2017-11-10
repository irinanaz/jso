'use strict';

var toetsenbord = require('readline-sync');

var aantalVakken = 3, vak;
var puntenTabel = new Array(aantalVakken);

function leesTweeDimTabel(tabel, hoofding) {
  var rij, kol;
  for (rij = 0; rij < tabel.length; rij++) {
    for (kol = 0; kol < tabel[rij].length; kol++) {
      tabel[rij][kol] = parseInt(toetsenbord.question(hoofding + (rij + 1) + "(" + (kol + 1) + ") "));
    }
  }
}

function toonTweeDimTabel(tabel, hoofding) {
  var rij, kol, result = hoofding;
  for (rij = 0; rij < tabel.length; rij++) {
    result += "\n";
    for (kol = 0; kol < tabel[rij].length; kol++) {
      result += "\t" + tabel[rij][kol];
    }
  }
  console.log(result);
}

function maximum(tabel){
    var rij; //rijen = tabel.lenght;
    var kol; //kollomen= tabel[rijen].lenght;
    var maxInRij = new Array;
    for (rij = 0; rij < tabel.length; rij++) {
        //console.log(Math.max(...tabel[rij]));
        maxInRij.push(Math.max(...tabel[rij]));
        //console.log(maxInRij);
    }
    //console.log(Math.max(...maxInRij));
return Math.max(...maxInRij);
}

/****** HOOFDPROGRAMMA ******/
// allocatie van kolommen van tabel
for (vak = 0; vak < aantalVakken; vak++) {
  puntenTabel[vak] = new Array(5);
}

leesTweeDimTabel(puntenTabel, "Geef punten voor vak ");
toonTweeDimTabel(puntenTabel, "Behaalde punten");

/* oefening: */
console.log("Het maximum = %d", maximum(puntenTabel));

