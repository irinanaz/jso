'use strict';
var toetsenbord = require('readline-sync');
var tellerJuist=0;

function geefGetal(max){
    var getal=Math.random();
    getal *= max;
    getal = Math.floor(1+getal);
    return getal;

}
function evalueerProduct (x,y,z){
    //return x*y ==z;
    if (x*y == z){
       var evaluatie=true; 
    } else {evaluatie  =false;}
    return evaluatie;
}
function toonMeldingBijUitkomst (e){
    if(e==true){ var m='juist';
        }
        else{ m='fout';
    }
    return m;
}
function toonMeldingBijUitkomst2 (e){
    var b="";
    if(e==true){ 
        var m=geefGetal(3);
        switch (m){
            case 1: 
                b="Juist!";
                break;
            case 2: 
                b="Dat klopt!";
                break;
            case 3: 
                b="Goed";
                break;
        }
        }
        else{ 
            m=geefGetal(3);
            switch (m){
                case 1: 
                     b="Neen";
                    break;
                case 2: 
                    b="Dat klopt niet!";
                    break;
                case 3: 
                    b="helemaal niet!";
                    break;
            }
        } 
    return b;
}
function toonMeldingBijTotaal(totaalCorrect){
    var bericht="";
    switch (totaalCorrect) {
        case 5:
        case 6:
            bericht="nog veel oefenen!";
            break;
        case 7:
            bericht="OK";
            break;
        case 8:
            bericht="een goede start";
            break;
        case 9: 
            bericht = "heel goed!";
            break;
        case 10: 
            bericht ="Proficiat! Uitstekend!";
            break;
        default:
            bericht= "Totaal minder dan %d : onvodoende!";
    }
 return bericht;
}

/* // Oef van dtem d

var bovengrens = toetsenbord.question('Geef bovengrens in: ');
while (bovengrens <=1) {
    bovengrens = toetsenbord.question('Geef bovengrens in( dat moet groter dan 1 zijn): ');
}

var getal1 =geefGetal();
var getal2= geefGetal();
console.log("getal1 en getal2: %d en %d", getal1,getal2);
var product=getal1*getal2;
var resGebruiker = toetsenbord.question('Wat is de product van 1ste en 2de getallen: ');
var evalProd = evalueerProduct(getal1,getal2,resGebruiker);

var melding = toonMeldingBijUitkomst(evalProd);
console.log(melding);*/

var bovengrens = toetsenbord.question('Geef bovengrens in: ');
while (bovengrens <=1) {
    bovengrens = toetsenbord.question('Geef bovengrens in( dat moet groter dan 1 zijn): ');
}
for (var i=1; i<=10; i++) {
    var getal1 =geefGetal(bovengrens);
    var getal2= geefGetal(bovengrens);
    console.log("getal1 en getal2: %d en %d", getal1,getal2);
    
    var resGebruiker = toetsenbord.question('Wat is de product van 1ste en 2de getallen: ');
    var product=getal1*getal2;
    var evalProd = evalueerProduct(getal1,getal2,resGebruiker);
    
    if (evalProd == true) { tellerJuist+=1; }
    console.log("%d correcte antwoorden: ",tellerJuist);
    /*var melding = toonMeldingBijUitkomst(evalProd);
    console.log(melding);*/
    console.log(toonMeldingBijUitkomst2(evalProd));
}

/*var melding = toonMeldingBijTotaal(tellerJuist);
console.log(melding);*/
console.log(toonMeldingBijTotaal(tellerJuist));
