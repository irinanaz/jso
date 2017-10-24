'use strict';

var toetsenbord = require('readline-sync');
var getalA = parseInt(toetsenbord.question("Geef positief geheel getal A : "), 10);
var getalB = parseInt(toetsenbord.question("Geef positief geheel getal B, anders dan getal A: "), 10);
var ggd=0

while (getalA < 0 || getalB<0 || getalA==getalB){
    console.log("  Geef twee verschillende positieve gehele getalen in");
    var getalA = parseInt(toetsenbord.question("Geef positief geheel getal A : "), 10);
    var getalB = parseInt(toetsenbord.question("Geef positief geheel getal B, anders dan gatal A: "), 10);

    }
    if (getalA < getalB) {
        ggd=getalB-getalA;
    } else { ggd=getalA-getalB;}
    console.log("Het ggd is %d", ggd);
