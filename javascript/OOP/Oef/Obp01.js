'use strict';

var toetsenbord = require('readline-sync');


//Constructor
function Radio(){
    
    }
    
   
Radio.prototype.getMuziek = function (){   
        if (this.volume<=0){ 
            return "lalala";
            
        }  else return "LALALA";
    }







var radio = new Radio();
radio.volume = 1;
var tekstLuid = radio.getMuziek();
console.log("Bij luid volume klinkt de radio als %s", tekstLuid);
radio.volume = -1;
console.log("Bij stil volume klinkt de radio als %s", radio.getMuziek());

var volume = parseInt(toetsenbord.question("Geef volume: "));
radio.volume = volume;
console.log("Bij dit volume klinkt de radio als %s", radio.getMuziek());
