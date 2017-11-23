'use strict';


//Constructor
function Rekening(beginjaar,eindjaar,rente, startbedrag){
    this.beginjaar=beginjaar;
    this.eindjaar=eindjaar;
    this.rente = rente
    this.startbedrag=startbedrag;
    
};
Rekening.prototype.eindbedrag = function (){ 
    
    var eindbedrag = parseInt(this.startbedrag);
    for(var i =1; i<=(this.eindjaar - this.beginjaar);i++){
          eindbedrag +=eindbedrag*this.rente/100;
        }
    return eindbedrag;
}

var rekening = new Rekening(2000,2010,4,1000);
console.log("%d EUR belegd tegen %d%% in %d geeft in het jaar %d als eindbedrag %d",
    rekening.startbedrag, rekening.rente, rekening.beginjaar, rekening.eindjaar, rekening.eindbedrag());
