'use strict';

// declaratie van een array;
var lijst;

// creatie van een lijst:
lijst = new Array(); // Array constructor
var aantalElementen = lijst.length;

console.log('Na de creatie bevat lijst %d elementen', aantalElementen);

// 5 elementen toevoegen aan lijst :
for ( var i=0; i<5; i++){
    lijst[i]= (i+1)*10; // in eens gecreeerd en ingevuld.
    console.log(lijst[i]);
}
console.log('Na toevoeging van 5 elementen bevat lijst %d elementen', lijst.length);
console.log(lijst);

// eerste element overscrijven:
lijst[0] = 0;
console.log(lijst);

// laatste element overschrijven:
lijst[lijst.length-1] ="een vreemde eend in de bijt";
console.log(lijst);

// alle elementen van lijst een per een overlopen( en op scherm tonen):
for (i =0 ; i<lijst.length;i++ ){
    console.log(lijst[i]);
}

console.log("elementen in omgekeerde richting:");
for ( i=lijst.length-1; i>=0; i--){ console.log(lijst[i]);}

// een lijst groter maken met een element:

lijst[lijst.lenght + 3]="kiekeboe";
for (i =0 ; i<lijst.length+3;i++ ){
    console.log(lijst[i]);
}

//element achteraan toevoegen
lijst.push("koekoek");
console.log(lijst);
// andere manier om element achteraan toe te voegen:
lijst[lijst.length]=" nog eens koekoek";
console.log(lijst);

var k3 = []; // array literal new array. Sneller dan constructor.
k3.push ="Karen";
k3.push = "Kristel";
k3.push = "Kathleen";
console.log(k3);