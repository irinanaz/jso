var toetsenbord = require('readline-sync');
var inhoud = toetsenbord.question('Inhoud: ');
var recipient = toetsenbord.question('Recipient: ');
var startgetal = toetsenbord.question('startgetal: ');
var meervoud ='s'
var teller;
var result = startgetal +" "+recipient+meervoud+" of "+inhoud+" on the wall, "+ startgetal+" "+recipient+meervoud +" of " + inhoud + ".\n Take one down and pass it around, "+teller+" "+recipient+meervoud+" of "+inhoud+" on the wall.\n\n";

for ( teller=startgetal; teller>=0; teller=teller-1 ) {
    console.log(result);
    console.log(teller);
    console.log(startgetal);
    }
console.log('the end.');