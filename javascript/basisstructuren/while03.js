'use strict';

<<<<<<< HEAD
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
=======
var i = 1;
var msg;
// let op!  als je een ; na de voorwaarde van de while schrijft,
// is dat de inhoud van de lus en veroorzaak je een oneindige lus
// (blok tussen accolades hoort dan niet meer bij while)
// while (i <= 10); {   // oneindige lus!!!
while (i <= 10) {
    /*
    if( i % 2 == 0){
        msg = "even";
    }
    else{
        msg = "oneven";
    }
    */
    msg = i % 2 == 0 ? "even" : "oneven";
    console.log("%d is %s", i, msg);
>>>>>>> 7cc22c99faa56555b249fb3b33889b1429221b6c
    i++;
}