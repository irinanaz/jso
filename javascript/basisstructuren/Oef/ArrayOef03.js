'use strict';
var toetsenbord = require('readline-sync');
var dobblesteen = 6;
var keren = 10; // 10 om te testen .moet vervangen door 6000.
var tellers = new Array(dobblesteen);
tellers.fill(0);
var randomgetal;

for (var i=0; i<keren; i++){
    randomgetal = Math.floor(1 + Math.random() * dobblesteen);
    //console.log(randomgetal); om te zien tijdens de test.
    tellers[randomgetal-1]+=1;
}
console.log(tellers);
