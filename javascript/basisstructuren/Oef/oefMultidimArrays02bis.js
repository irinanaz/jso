'use strict';

var toetsenbord = require('readline-sync');


function leesVierkant(tabel, hoofding) {
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

function vierkant(tabel){
    var rij=0;
    var vierkant=true;
    while (vierkant == true && rij<tabel.length){
        if (tabel.length == tabel[rij].length){
            rij++;
            //console.log(" rij %d is gelijk", rij);
        } else { 
        //console.log(" rij %d is niet gelijk", rij);
        vierkant=false; }
    
    } return vierkant;
    }
/*function som(lijn){

    for(rij=0; rij<lijn.length;rij++){
        magLijn[rij]=0;
        for(kol=0; kol<lijn.length; kol++){
            magLijn[rij]+=lijn[rij][kol];
        }
    } console.log(magLijn);  
}*/
function magischVierkant (tabel){
    var rij,kol;
    var somD=0;
    var magischRijen = new Array(tabel.length);
    var magischKol = new Array(tabel.length);
    var magisch=true;

    for(rij=0; rij<tabel.length;rij++){
        magischRijen[rij]=0;
        for(kol=0; kol<tabel.length; kol++){
            magischRijen[rij]+=tabel[rij][kol];
        }
    } console.log(magischRijen);

    for(kol=0; kol<tabel.length;kol++){
        magischKol[kol]=0;
        for(rij=0; rij<tabel.length; rij++){
            magischKol[kol]+=tabel[rij][kol];
        }
    } console.log(magischKol);

    for (var d=0; d<tabel.length; d++){
        somD += tabel[d][d];
    }
    console.log(somD);
    rij=0;
    while ( magisch==true && rij<tabel.length){
        if ( somD == magischRijen[rij] && somD == magischKol[rij]){
            rij++;
        } else magisch = false;
    }
    return magisch;
}



/****** HOOFDPROGRAMMA ******/

//om te testen:
var rij1 = [16,3,2,13];
var rij2 = [5,10,11,9];
var rij3 = [9,6,7,12];
var rij4 = [4,15,14,1];
var rechthoek= [rij1,rij2,rij3,rij4];
// var rij1 = new Array(4);
// var rij2 = new Array(4);
// var rij3 = new Array(4);
// var rij4 = new Array(4);
// var rechthoek= [rij1,rij2,rij3,rij4];
//leesTweeDimTabel(puntenTabel, "Geef getal voor vak ");
//toonTweeDimTabel(rechthoek, "gegeven rechthoek");
if (vierkant(rechthoek)==true){
    // verder testen
    console.log("dat is wel een vierkant.")
    //leesVierkant(rechthoek, "Geef getal voor vak ");
    toonTweeDimTabel(rechthoek, "gegeven rechthoek");
    console.log(magischVierkant(rechthoek));

}else console.log("gegeven vierkant is de magisch vierkant niet.");
