'use strict';

var toetsenbord = require('readline-sync');


//Constructor
function TV2(){
    this.post;
    this.uur;
    
};
TV2.prototype.getProgramma = function (){  
    var programma; 
    if(this.post==0){
        switch (true){ 
            case this.uur <18: programma = "Tik Tak"; break;
            case this.uur ==18: programma = "Samson en Gert"; break;
            default: programma = 'K3 in het Sportpaleis';
        }
    } else { 
        if (this.post==1){
            switch (true){ 
                case this.post ==19: programma = "Voetbal"; break;
                default: programma = "sport";
            }
        }else{
            console.log("Deze post werkt niet.")
        }
    }return programma;
}; 


var tv = new TV2();
tv.post = 0;
tv.uur = 17;
var programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s' voor 18uur.", tv.post, programma);

var post = parseInt(toetsenbord.question("Geef post(0 of 1): "));
tv.post = post; 
var uur  = parseInt(toetsenbord.question ( "geef een uur:  "));
tv.uur = uur;
programma = tv.getProgramma();

console.log("Op post %d spelen ze '%s'", tv.post, programma);