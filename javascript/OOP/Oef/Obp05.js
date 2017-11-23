'use strict';


//Constructor
function Auto(){
    this.snelheid;
    this.aantalUren;
    this.aantalMinuten;
    
};
Auto.prototype.afstand = function (){ 
    
    var afstand = parseInt(this.snelheid)*this.aantalUren + parseInt(this.aantalMinuten)*(this.snelheid/60);
    return afstand;

}


var auto = new Auto();
auto.snelheid = 60;
auto.aantalUren = 2;
auto.aantalMinuten = 5;
console.log("Na %d:%s u gereden te hebben tegen %d km/uur heb je %d km afgelegd",
    auto.aantalUren, auto.aantalMinuten < 10 ? "0"+auto.aantalMinuten : auto.aantalMinuten,  auto.snelheid, auto.afstand());
