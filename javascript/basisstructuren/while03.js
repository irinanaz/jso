'use strict';

var i=1;
var msg;
while(i<=10){
    /*
    if (i%2==0) {
        msg="even";
    } else {
        msg="onenven"
    }*/
    msg = i%2==0 ? "even" : "oneven";
    console.log('%d is %s',i, msg );
    i++;
}