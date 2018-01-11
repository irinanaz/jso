var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1  - functie
var listner1 = function listner1() {
   console.log('listner1 executed.');
};

// listener #2  - functie
var listner2 = function listner2() {
  console.log('listner2 executed.');
};

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1); // als vanaf nu gebeurt 'connection' dan listner1

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2); // als vanaf nu gebeurt 'connection' dan listner2

// count aantal events die gekoppeld zijn aan event:
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');  // hier is de gebeurtenis: worden listner1 en listner2 uitgevoerd.

// Remove the binding of listner1 function  - loskopelling
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

console.log("Program Ended.");


// uitput:
// 2 Listener(s) listening to connection event
// listner1 executed.
// listner2 executed.
// Listner1 will not listen now.
// listner2 executed.
// 1 Listener(s) listening to connection event
// Program Ended.