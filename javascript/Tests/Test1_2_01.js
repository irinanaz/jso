'use strict';

'use strict';

// var toetsenbord = require('readline-sync');

function maakString(lengte, karakter){
 var s="";

 var spaties=lengte-karakter;
 var karakters=karakter*2-1;
 for (var i=0; i<spaties; i++){
    s +=" ";   
 }
 for (var j=0; j<karakters; j++){
     s+=karakter;}

    return s;
    
}

function tekenGetallenPiramide(hoogte){
    var string
    for (var i=1; i<=hoogte; i++){
       string = maakString(hoogte,i);
        console.log(string);

    }
    
}
tekenGetallenPiramide(5);
/*
function maakString(lengte, karakter){
 var s="";
 for (var i=0;i<lengte-i;i++){
    s+=" ";
    
 }
 for (var j=0;j<lengte*2-1;j++){
     s+=karakter;}

    return s;
}

function tekenGetallenPiramide(hoogte){
    var string
    for (var i=1; i<=hoogte; i++){
       string = maakString(hoogte,i);
        console.log(string);

    }
    
}*/