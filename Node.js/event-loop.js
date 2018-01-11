var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
// oproepen: 
   // Fire the data_received event 
   eventEmitter.emit('data_received');  // emit - betekent 'ga kijken of er data_received connection is' is.
};
// kopellen:
// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
// kopellen:
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});
// oproepen:
// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");


// 
eventEmmitter.emit('naam_van_event', 'parameter_voor_functie_mag_meerdere_zijn'); //
eventEmmitter.on('naam_van_event', 'functie_die_moet_gebeuren'); // de zelfde als eventlistnener