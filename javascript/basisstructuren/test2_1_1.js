'use strict';

var result = "";
var s = "Nou moe";
s.toUpperCase();
switch(s){
    case "NOU MOE": result += "Zou je dit wel doen?";
    case "nou moe": result += "Ben je zeker?";
    case "Nou moe": result += "Het is me wat."
}
console.log(result);

var woord = "helaba";
// s.substring(idx) geeft de substring van s vanaf positie idx terug 
var output = woord.substring(1);
console.log(output);

function mijnArrayFie(tabel){
    tabel[2] = "koekoek";
}
var teletubbies = ["Tinky Winky", "Dipsy", "Lala", "Po"];
mijnArrayFie(teletubbies);
console.log(teletubbies[2]);

var fruitschaal = ["appel", "peer", "banaan"];
for(var i=1; i < fruitschaal.length - 1; i++){
    fruitschaal[i] = fruitschaal[i] + "tje";
}
fruitschaal[fruitschaal.length] = "kiwi";
console.log(fruitschaal);

var punten = new Array(5);
console.log(punten[0]);

const AANTAL = 3;
var punten = new Array(AANTAL);
for(var i=0; i < punten.length; i++){
    punten[i] = [i+1, (i+1)*10, (i+1)*100];
}
console.log(punten[punten.length-1][1]);

var g = 123;
function fie(){
    var g = 1000;
    g *= 10;
    console.log(g);
}
fie();
console.log(g);

var getal = 10;
var string = "9";
var woord = " dalmatiers";
var result = getal*string + 11 + woord;
console.log(result); 

function telVoorkomenLetter(woord, letter){
    var aantal = 0;
    for(var i=1; i<woord.length; i++){
        if(woord.charAt(i) == letter){
            aantal++;
        }
    }
    return aantal;
}
console.log(telVoorkomenLetter("hahahaha", "h"));