'use strict';
var KLEUR = ["Harten", "Klaveren", "Schoppen", "Ruiten"];
var KLEURcode = ["h", "c", "s", "d"];
var WAARDE = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "boer", "dame", "heer"];
var PUNTEN = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var maxKaarten = 52;

function Speelkaart(kleur, waarde, afb) {
    this.kleur = kleur; // 4kleuren;
    this.waarde = waarde; // 13 kaarten
    this.afbeelding = afb;
}

Speelkaart.prototype.omschrijving = function () {
    return this.kleur + ' ' + this.waarde;


}

function Speelkaartenboek() {
    this.speelkaarten = new Array();
    this.index = 0;
    for (var k = 0; k < KLEUR.length; k++) {
        for (var w = 0; w < WAARDE.length; w++) {
            var kaart = new Speelkaart(KLEUR[k], WAARDE[w], "images/"+(w + 1) + KLEURcode[k] + ".png");
            //console.log(kaart);
            this.speelkaarten.push(kaart);
        }
    }
}

Speelkaartenboek.prototype.schud = function () {
    var newBoekTmp = new Array();
    var indx;
    for (var i = 0; i < this.speelkaarten.length;) {
        indx = Math.floor(Math.random() * this.speelkaarten.length);
        newBoekTmp.push(this.speelkaarten[indx]);
        this.speelkaarten.splice(indx, 1);
    }
    // console.log(newBoekTmp);
    this.speelkaarten = newBoekTmp;
    // console.log(this.speelkaarten); // test ok
    this.index = 0;
}

Speelkaartenboek.prototype.volgendeKaart = function () {

    return this.speelkaarten[this.index++];

}
Speelkaartenboek.prototype.isLeeg = function(){
    if (this.index == maxKaarten){
        return true;
    } else return false;
}
function Hand() {
    this.speelkaarten = new Array();
    
}
Hand.prototype.punten = function () {
    var puntenHand = 0;
    for(var i = 0; i<this.speelkaarten.length;i++){
        if ()
    }
    return punten;
}

Hand.prototype.voegKaartToe = function (kaart) {
    this.speelkaarten.push(kaart);
}
Hand.prototype.magStoppen= function (){
    if(this.punten()<=17){
        return false;
    } else { return true;}
}

Hand.prototype.isKapot= function(){
    if (this.punten()<=21) {
        return false;
    } else { return true;}

}
var kaartenboek = new Speelkaartenboek();
var hand = new Hand();

kaartenboek.schud();
do {
    var kaart = kaartenboek.volgendeKaart();
    console.log(kaart.omschrijving());
    hand.voegKaartToe(kaart);
    console.log("punten hand: %d", hand.punten());
} while (!hand.magStoppen());
if (hand.isKapot()) {
    console.log("Helaas, u bent uw inzet kwijt");
}
else {
    console.log("U krijgt uw inzet %d keer terug", hand.factor());
}
