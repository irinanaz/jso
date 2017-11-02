'use strict';
var y;
var toetsenbord = require('readline-sync');
function armstrong(g,c){
    var macht=1, res=0;
    for (var i=0; i<c ; i++){
        for (var j=0; j<c ; j++){
            console.log("cijfer %d in %d", j,g.charAt(i));
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
for (var getal=1; getal<=10000; getal++ ){
    y=getal.lenght;
    if( armstrong(getal,y) == true ){
        console.log("%d is een armstrong getal", getal);
    }
}


