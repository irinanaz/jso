'use strict';

// een (string)literal staat tussen enkele of dubbele quotes
var s = "pandemonium" ;
// literals zijn primitieve waarden (geen String-objecten)

// strings zijn 'immutable' 
s.toUpperCase();
console.log (s); // pandemonium op scherm --> string is immutable.
s=s.toUpperCase(); 
console.log(s);  // PANDEMONIUM op scherm.


console.log ( " Het woord %s bestaat uit %d karakters.", s,s.length); // s.lenght is geen function dus geen (().

// literals verspreiden over meerdere lijnen
//manier 1: concatenerenmet +operator

var langeString = "dit is een lang"+ // als het moet verdeelt woorden over de meerdere lijnen moet je dan op de elke lijn de ""sluiten en met + concateneren.
        "zin of zo lijkt"+
        "het toch"
console.log(langeString);
// manier 2: backslash op einde van de lijn
// geeft aan dat stringliteral verder gaat op
// de volgende lijn

langeString ="Jan , Piet, Joris,\
en Korneel, die hebben\
baarden.";

console.log(langeString);
// escape caracters

s="zin1\nzin2";
console.log(s);
s="c:\temp";
console.log(s);
s="c:\\temp";
console.log(s);
s="Zij zei:\"hallo\"";
console.log(s); // Zij zei:"hallo!"

s='Zij zei:"hallo"';
console.log(s); // Zij zei:"hallo!"

var stringObject=new String(s); // we maken een nieuwe objecten met een new operator en geven die de waarde die in s zit.
console.log (stringObject);


//**************
//strings vergelijke
//******************
if (s==stringObject){
        console.log("s == stringObject");  // vergelijkt de inhoud van strings
}
if (s===stringObject){
        console.log("s === stringObject"); // s is een primitieve waarde, strinObject is een string object
        //--> vreschillend type
}

var w1 = "banaan", w2 ="appel";
if (w1<w2){
        console.log("%s koomt alfabetisch voor %s", w1,w2);
}else{
        console.log("%s koomt alfabetisch voor %s", w2,w1);
}


//of met een functie

var result =w1.localeCompare(w2);// geeft geen True of False, maar dat geeft een getal. 
// als die getal <0 is dan 
if (result<0){
        console.log("%s koomt alfabetisch voor %s", w1,w2);
}else if (result == 0) {
        console.log("%s en %s hebben dezelfde inhouds", w1,w2);
        }else {
                console.log("%s koomt alfabetisch voor %s", w2,w1);
}


var w1 = "Appel", w2 ="banaan";
if (w1<w2){
        console.log("%s koomt alfabetisch voor %s", w1,w2);
}else{
        console.log("%s koomt alfabetisch voor %s", w2,w1);
}