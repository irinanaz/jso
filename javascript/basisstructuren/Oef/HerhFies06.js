'use strict';
var toetsenbord = require('readline-sync');

function fibonacci(f){
 var eerste=1;
 var tweede=1;
 var ndef;
 if (f==1||f==2){
     ndef=1;
    }else{

    for (var i=3; i<=f; i++){
        ndef=eerste+tweede;
        eerste=tweede;
        tweede=ndef;
    }
 }

  
    return ndef;
}

var rijFibonacci="";
for (var j=1;j<=10;j++){
    rijFibonacci+= " "+ fibonacci(j);
}
console.log (rijFibonacci);