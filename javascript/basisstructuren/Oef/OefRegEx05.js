
'use strict';

var toetsenbord = require('readline-sync');


function controleerInvoer(){
    var iban;
    var exp= new RegExp("^(BE|be)\\d{2}.*\\d{4}.*\\d{4}.*\\d{4}$");
    
    iban = toetsenbord.question("iban: ");
     console.log(exp.test(iban));
    while (exp.test(iban)==false){
       
        
        iban = toetsenbord.question("Geef de juiste iban: ");
        
    }
    return iban;
}
function idNummer(iban) {
    var ibanNew = iban.replace(/( +)/g,''); 
    console.log(ibanNew);

    var idNummer = ibanNew.substr(4,12);
    console.log ( "nummer: ",idNummer);
    var controlecijfer = ibanNew.substr(14,2);
    console.log ("controlecijfer: ",controlecijfer);
    var nummerTien = ibanNew.substr(4,10);
    console.log ("nummerTien: ",nummerTien);
   //parseInt(nummerTien)%97==0;
    
    var controlenummer = iban.substr(2,2);
    console.log ("controlenummer: ",controlenummer);
    var tmpId = idNummer + "111400";
    console.log(tmpId);
    var rest=parseInt(tmpId)%97;
    console.log ("rest: ",rest);

    if ( (parseInt(nummerTien)%97==0 && parseInt(controlecijfer)==97)||  (parseInt(nummerTien)%97== parseInt(controlecijfer))) {
        if ((98-rest )== parseInt(controlenummer)){
            console.log ("iban is juist ");
         } else {
        console.log ("iban is juist niet.");
         }
        }
   
    

}


var iban = controleerInvoer();
idNummer(iban);
console.log(iban);
