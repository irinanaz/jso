'use strict';
var toetsenbord = require('readline-sync');

function fibonacci(f){
 var eerste=1;
 var tweede=1;
 if (f==1)||(f==2){
     ndef=1;
}else{
    for (i=3; i<=f; i++){
        ndef=eerste+tweede;
        eerste=tweede;
        tweede=ndef;
    }
 }

   ndef
    return 
}