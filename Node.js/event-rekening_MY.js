'use strict';
// Create an eventEmitter object
var events = require('events');
var eventEmitter = new events.EventEmitter();

function Rekening (bedrag) {
    this.saldo = bedrag;
}
Rekening.prototype.stortGeld = function(bedragPlus){
    this.saldo += bedragPlus;
    return this.bedrag;
}
Rekening.prototype.haalGeldAf = function(bedragMin){
    if(this.saldo>=bedragMin){
        this.saldo -= bedragMin;
    } 
    else eventEmitter.emit('saldo_negatief', this);        // om hele object door te geven
 // else eventEmitter.emit('saldo_negatief', this.saldo);  // enkel een saldo door te geven
    return this.bedrag;
}
Rekening.prototype.on = function(event, eventhandler){
    eventEmitter.on(event, eventhandler);
}

var rekening = new Rekening(100);
console.log("saldo na creatie: ", rekening.saldo);

rekening.on('saldo_negatief', function(src){   
    // hier geven we heel de object door
      // dat betekent dat funcie heeft heel de object als parameter. 
      //Maar we hebben nodig enkel saldo van die object bij uitvoer.
      // dus src.saldo -- zie ook lijn 17.:
    console.log("saldo ontoereikend! (Saldo bedraagt ", src.saldo,")"); 
    // enkel een saldo door te geven:
    //console.log("saldo ontoereikend! (Saldo bedraagt ",src,")"); 
});

var bedrag  = 20;
rekening.stortGeld(bedrag);

console.log("saldo na storting van ", bedrag, ": ", rekening.saldo);
bedrag = 10;
rekening.haalGeldAf(bedrag);
console.log("saldo na opname van ", bedrag, ": ", rekening.saldo);
bedrag = 150;
rekening.haalGeldAf(bedrag);
console.log("saldo na opname van ", bedrag, ": ", rekening.saldo);

// saldo na creatie:  100
// saldo na storting van  20 :  120
// saldo na opname van  10 :  110
// saldo ontoereikend! (Saldo bedraagt  110 )
// saldo na opname van  150 :  110