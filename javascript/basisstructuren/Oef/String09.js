'use strict';
var toetsenbord = require('readline-sync');
function geslacht(rrn){
    var geslacht ="";
    var getal=parseInt(rrn.substring(9,10) );
    
    if (getal%2==0){
        geslacht="vrouw";
    } else { geslacht="man";}
    return geslacht;
}

function leeftijd(rrn){
    var gebdatum ="";
   var dag=rrn.substring(4,6);
   var mnd=rrn.substring(2,4);
   var jaar=rrn.substring(0,2);

    
    var g=parseInt(rrn.substring(0,6)+rrn.substring(7,10),10);
    var controlegetal=parseInt(rrn.substring(11,13),10);

//    console.log(g);
//    console.log("controlegetal", controlegetal);

    if ( controlegetal== 97-(g%97)){
        jaar=19+jaar;
    } else{
        jaar=20+jaar;
    }
    //console.log ("%d/%d/%d",dag,mnd,jaar);

    var gebDate = new Date(jaar,mnd-1,dag);
    console.log(gebDate.toLocaleDateString());

    // console.log("%s %s %s", gebDate.getDate(), gebDate.getMonth(), gebDate.getFullYear())
   
    var vandaag = new Date();
    var vandaagJaar = vandaag.getFullYear();
    var  vandaagMnd = vandaag.getMonth();
    var vandaagDag = vandaag.getDate();
    var leeftijd = vandaagJaar - jaar;
    
        if ( vandaagMnd < (mnd - 1))
        {
            leeftijd--;
        }
        if (((mnd - 1) == vandaagMnd) && (vandaagDag < dag))
        {
            leeftijd--;
        }
    
    return leeftijd;

}



var rrNummer = toetsenbord.question('Geef uw rijkregister nummer in(xxxxxx-xxx-xx): ');




console.log (geslacht(rrNummer));
console.log(leeftijd(rrNummer));