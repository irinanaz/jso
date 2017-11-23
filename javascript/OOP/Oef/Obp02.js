'use strict';

var toetsenbord = require('readline-sync');


//Constructor
function TV(){
    
};
TV.prototype.getProgramma = function (){  
    var programma; 
    switch (true){ 
        case this.post ==0: programma = "K3 en de regenboogprinses"; break;
        case this.post ==1: programma = "België -  Spanje"; break;
        case this.post ==2: programma = "Parijs - Tours"; break;
        case this.post ==3: programma = "Lotto uitslag"; break;
        default: programma = 'Ooit "FC De Kampioenen" gemist?';

        
    } return programma;
};  
   
//






var tv = new TV();
tv.post = 2;
var programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s'", tv.post, programma);
var post = parseInt(toetsenbord.question("Geef post: "));
tv.post = post; // origin: deze en volgende lijnen omgekeerd --> fout
programma = tv.getProgramma();

console.log("Op post %d spelen ze '%s'", tv.post, programma);

