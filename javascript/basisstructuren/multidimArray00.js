'use strict';

const AANTALRIJEN = 4, AANTALKOLOMMEN = 3;

// declaratie en creatie van een 2-dim array
var speelbord = new Array(AANTALRIJEN);
for(var i=0 ; i< speelbord.length; i++){
    speelbord[i] = new Array(AANTALKOLOMMEN);
}

for(var rij=0; rij < speelbord.length; rij++){  // rijen overlopen
    for(var kolom= 0; kolom < speelbord[rij].length; kolom++){  // kolommen overlopen
            speelbord[rij][kolom] = rij + " " + kolom;
    }
}

// ter controle
console.log(speelbord);

// array op scherm tonen
var result;
for(rij=0 ; rij<speelbord.length; rij++){
    result = "";
    for(kolom=0; kolom < speelbord[rij].length; kolom++){
        result +=  speelbord[rij][kolom] + "\t";
    }
    console.log(result);
}

// *********************** voor de liefhebbers
// suggestie van Joris: spread operator
// spread operator toepassen op 2-dim array
console.log(...speelbord);  // console.log (speelbord[0], speelbord[1], speelbord[2], speelbord[3]);
// spread operator gebruiken om 2-dim array op scherm te tonen
for(rij=0; rij< speelbord.length; rij++){
    var huidigeRij = speelbord[rij];
    console.log(...huidigeRij);
}