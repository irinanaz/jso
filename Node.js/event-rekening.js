'use strict';

var events = require('events');

function Rekening(saldo=0){
    this.saldo = saldo;
    this.eventEmitter = new events.EventEmitter();
}

Rekening.prototype.stortGeld = function(bedrag){
    this.saldo += bedrag;
}

Rekening.prototype.haalGeldAf = function(bedrag){
    if (this.saldo >= bedrag){
        this.saldo -= bedrag;
    }
    else{
        this.eventEmitter.emit('saldo_negatief', this);
    }
}

Rekening.prototype.on = function(eventName, eventHandler){
    this.eventEmitter.on(eventName, eventHandler);
}

var rekening = new Rekening(100);
rekening.on('saldo_negatief', function(src){
    console.log("saldo ontoereikend! (Saldo bedraagt ",src.saldo,")");
});
console.log("saldo na creatie: ", rekening.saldo);
var bedrag  = 20;
rekening.stortGeld(bedrag);
console.log("saldo na storting van ", bedrag, ": ", rekening.saldo);
bedrag = 10;
rekening.haalGeldAf(bedrag);
console.log("saldo na opname van ", bedrag, ": ", rekening.saldo);
bedrag = 150;
rekening.haalGeldAf(bedrag);
console.log("saldo na opname van ", bedrag, ": ", rekening.saldo);
while(bedrag > 0){
    rekening.haalGeldAf(bedrag);
    console.log("saldo na poging tot opname van ", bedrag, ": ", rekening.saldo);
    bedrag -= 10;
}