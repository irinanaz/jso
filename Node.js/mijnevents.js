<<<<<<< HEAD

=======
>>>>>>> 1403394863fd51c75a30dc68f82047fd03f3f426
'use strict';

var events = require('events');
var eventsEmitter = new events.EventEmitter();

<<<<<<< HEAD
// event afvuren  (= sgnaleren dat er iets gebeurl is)
eventsEmitter.emit('brand');

// vermits er nog geen eventhandler aan een event 'brand' gekoppeld is, gebeurd er niets

// event afhandelen (=aangeven wat moet gebeuren als vanaf hier een bepaald event afgevuuurd wordt)
eventsEmitter.on('brand',function(){
    console.log("bel de brandweer");
});
for (var i=1; i<6; i++ ){
    eventsEmitter.emit('brand');
}
eventsEmitter.on('brand', function (){
    console.log("sluit de ramen");

});
console.log("laatste melding");
eventsEmitter.emit('brand');


eventsEmitter.emit('lang leve de muizen');
eventsEmitter.emit('muis');  //gebeurd er niks. want er is geen event gekoppeld aan muis

eventsEmitter.on('muis', watAlsErMuisIS); // vanaf nu als event gebeurt dan wel.

eventsEmitter.emit('muis') ; // dat is een event dus nu wel

function watAlsErMuisIS(){
    console.log('spring zo snel mogelijk op de tafel!');
=======
// event afvuren (= signaleren dat iets gebeurd is)
eventsEmitter.emit('brand');
// vermits er nog geen eventhandler aan het event 'brand' gekoppeld is, gebeurt er niets

// event afhandelen (= aangeven wat moet gebeuren als vanaf hier een bepaald event
// afgevuurd wordt)
eventsEmitter.on('brand', function(){
    console.log("bel de brandweer");
});

for(var i=1; i<6; i++){
    eventsEmitter.emit('brand');
}

eventsEmitter.on('brand', function(){
    console.log("sluit de ramen");
});
console.log("laatste emit");
eventsEmitter.emit('brand');

console.log("lang leve de muizen");
eventsEmitter.emit('muis');  // geen output; want er is geen eventhandler gekoppeld aan muis
eventsEmitter.on('muis', watAlsErEenMuisIs);
eventsEmitter.emit('muis');

function watAlsErEenMuisIs(){
    console.log("Spring zsm op de tafel!");
>>>>>>> 1403394863fd51c75a30dc68f82047fd03f3f426
}