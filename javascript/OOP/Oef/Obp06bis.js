'use strict';
var toetsenbord = require('readline-sync');

//Constructor
function Begroting(){
    this.inkomsten=[];
    this.uitgaven=[];
    
    
};
Begroting.prototype.voegUitgaveToe = function (bedrag){ 
    this.uitgaven.push(bedrag);
    //console.log(this.uitgaven);
}

Begroting.prototype.voegInkomstToe = function (bedrag){ 
    this.inkomsten.push(bedrag);
    //console.log(this.inkomsten);
}

Begroting.prototype.totaal = function(tabel){ 
    //console.log(tabel);
    var totaal = 0;
    for (var i = 0; i< tabel.length; i++){
   
        totaal+=tabel[i];
    }
    //console.log(totaal);
    return totaal;
}
Begroting.prototype.presenteerLijst = function(tabel, teken){
    for (var i = 0; i< tabel.length; i++){
        console.log( teken + tabel[i]);
    }
}
Begroting.prototype.presenteerBegroting = function(){
    this.presenteerLijst(this.uitgaven,"-");
    this.presenteerLijst(this.inkomsten,"");
    
    var verschil = parseInt(this.totaal(this.uitgaven))-parseInt(this.totaal(this.inkomsten));
    var bericht="";
    if ( verschil>0){
        console.log(verschil);
        
    }
    return "De begroting is in evenwicht.";
}


var begroting = new Begroting();

begroting.voegUitgaveToe(5000);
begroting.voegUitgaveToe(6000);
begroting.voegInkomstToe(4000);
begroting.voegUitgaveToe(7000);
begroting.voegInkomstToe(3000);
//begroting.voegInkomstToe(11000); 
//begroting.presenteerBegroting();
console.log(begroting.presenteerBegroting());

/*UITVOER
-5000
-6000
-7000
4000
3000
11000
De begroting is in evenwicht.
*/
