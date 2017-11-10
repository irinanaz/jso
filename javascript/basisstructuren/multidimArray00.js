'use strictt';

const AANTALRIJEN = 4, AANTALKOLOMMEN = 3;

// declaratie van 2-dim array:

var speelbord = new Array(AANTALRIJEN);
for (var i=0; i<speelbord.length; i++){
    speelbord[i] = new Array(AANTALKOLOMMEN);
}

for (var rij=0; rij< speelbord.length; rij++){
    for (var kolom = 0;  kolom < speelbord[rij].length;  kolom++);{
        speelbord[rij][kolom] = rij + " " + kolom;
    }
}
console.log(speelbord);

// array op scherm krijgen
var result = "";
for (rij=0; rij<speelbord.length; rij++){
    result="";
    for(kolom=0; kolom< speelbord[rij].lenght; kolom ++){
        result += speelbord[rij][kolom]+"\t";
    }
}
console.log(speelbord);

console.log(...speelbord);
