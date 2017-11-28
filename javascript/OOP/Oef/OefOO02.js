'use strict';

var toetsenbord = require('readline-sync');
var weekDag = ["Ma", "Di","Woe","Do", "Vr","Za", "Zo"];
function Werknemer(naam){
    this.naam = naam;
    this.werkuren =[0,0,0,0,0,0,0];
    
Werknemer.prototype.overuren = function(){
    var totaalUren= 0;
    for(var i=0; i<this.werkuren.length; i++){
        totaalUren += this.werkuren[i];
    }
    if (totaalUren<37){
        console.log ("%s heeft minder dan 37 uur gewerkt",this.naam);
    } else{
        console.log ("%s heeft %d overuren.", this.naam, totaalUren - 37);
    }
}
Werknemer.prototype.wijzigWerkuren = function (dagNr, uren){
    this.werkuren[i] = uren;
}

};

var naam = toetsenbord.question( "Geef de naam van de werkgever:  ");
var werknemer = new Werknemer (naam);
for (var i =0; i<7; i++){
    //console.log ("Geef de werkuren voor %s ", weekDag[i]);
    werknemer.werkuren[i] = parseInt(toetsenbord.question("Geef de werkuren voor "+ weekDag[i]+": "));
}

var tmp = toetsenbord.question("Wilt u de uren wijzigen? j/n");
while (tmp.toLowerCase() == 'j'){
    var dag = parseInt(toetsenbord.question("Geef de dag van de week:  "));
    var nieuweUren = parseInt(toetsenbord.question( "Geef de nieuwe werkuren voor"+weekDag[dag]+" in:  "));
    werknemer.wijzigWerkuren(dag,nieuweUren);
    tmp = toetsenbord.question("Wilt u de uren wijzigen? j/n");
}

werknemer.overuren();


