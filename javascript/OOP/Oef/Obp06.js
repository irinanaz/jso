'use strict';


//Constructor
function Begroting(){
    this.inkomsten=[];
    this.uitgaven=[];
    
    
};
Begroting.prototype.voegUitgaveToe = function (bedrag){ 
    this.uitgaven.push(bedrag);
    console.log(this.uitgaven);
}

Begroting.prototype.voegInkomstToe = function (bedrag){ 
    this.inkomsten.push(bedrag);
    console.log(this.inkomsten);
}

Begroting.prototype.totaal = function(tabel){ 
    console.log(tabel);
    var totaal = 0;
    for (var i = 0; i< tabel.length; i++){
   
        totaal+=tabel[i];
    }
    console.log(totaal);
    return totaal;
}

Begroting.prototype.presenteerBegroting = function(){
    
    var verschil = parseInt(this.totaal(this.inkomsten))-parseInt(this.totaal(this.uitgaven));
    var bericht="";
    switch (true){
        case verschil<0 : bericht ="Je zit onder nul: je balans is "+ verschil +" euro.";break;
        case verschil==0 : bericht ="De begroting is in evenwicht.";break;
        default : bericht ="De begroting is in uw voordeel: uw balans "+ verschil+" euro.";
    }
    return bericht;
}


var begroting = new Begroting();

begroting.voegUitgaveToe(5000);
begroting.voegUitgaveToe(6000);
begroting.voegInkomstToe(4000);
begroting.voegUitgaveToe(7000);
begroting.voegInkomstToe(3000);
//begroting.voegInkomstToe(11000); // voor evenwicht;
begroting.presenteerBegroting();
console.log(begroting.presenteerBegroting());