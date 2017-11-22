'use strict';

function zonderOpeenvolgendeSpaties(zin){
    return zin.replace(/ +/g, " ")
}

console.log(zonderOpeenvolgendeSpaties("Een twee  drie   ."));

// terzijde:
// quantifiers in reguliere expressies zijn "greedy" (gulzig):
// er wordt een zo lang mogelijk substring gezocht
// die opgebouwd is volgens het patroon van de reg expr
console.log( "banaaaaaaan".replace(/a{2,}/g, "***") );  // ban***an
// om een quantifier "non-greedy" te maken, plaatsen we er een ? achter
console.log( "banaaaaaaan".replace(/a{2,}?/g, "***") );  // ban*********an