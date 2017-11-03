'use strict';

var toetsenbord = require('readline-sync');
function armstrong(g,c){
    var macht=1, res=0;
    for (var i=0; i<c ; i++){
        for (var j=0; j<c ; j++){
           /* console.log("cijfer %d in %s", j,g.charAt(i));*/
            macht=macht*g.charAt(i);
            
        } 
        console.log(macht);
        res+=macht;
        macht=1;

    }
    if (res==g){
    return true;}
    else {return false;}
}

//var x = parseInt(toetsenbord.question ("Hoe veel cijfers in getal?"),10);
//var getal = toetsenbord.question(" Geef een getal in:");
//console.log(armstrong (getal, x));
var y;
var getalString;
for (var getal=1; getal<=200; getal++ ){
    getalString = getal.toString(10);
    y=getalString.length;
    /*console.log(getal);
    console.log(y);*/
    if( armstrong(getalString,y) == true ){
        console.log("%d is een armstrong getal", getal);
    }
}


