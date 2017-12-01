'use strict';
var KLEUR = ["Harten", "Klaveren", "Schoppen", "Ruiten"];
var KLEURcode = ["h", "c", "s", "d"];
var WAARDE = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "boer", "dame", "heer"];
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
            var kaart = new Speelkaart(KLEUR[k], WAARDE[w], (w + 1) + KLEURcode[k] + ".png");
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
    //console.log(newBoekTmp);
    this.speelkaarten = newBoekTmp;
    console.log(this.speelkaarten); // test ok
    this.index = 0;
}

Speelkaartenboek.prototype.volgendeKaart = function () {

    return this.speelkaarten[this.index++];

}
Speelkaartenboek.prototype.isLeeg = function(){
    if (this.index == (maxKaarten-1)){
        return true;
    } else return false;
}

// var klaverenDrie = new Speelkaart("klaveren", "3");
// console.log(klaverenDrie.omschrijving());


// test Ok
var kaartenboek = new Speelkaartenboek();

// test Ok
// for (var k=0; k < KLEUR.length; k++){
//     for(var w=0; w < WAARDE.length; w++){
//         var kaart = new Speelkaart(KLEUR[k],WAARDE[w],(w+1)+KLEURcode[k]+".png");
//         //console.log(kaart);
//         kaartenboek.speelkaarten.push(kaart);
//     }
// }


// test ok

// console.log("boek na creatie:");
// for (var i = 0; i < kaartenboek.speelkaarten.length; i++) {
//     console.log(kaartenboek.speelkaarten[i].omschrijving());
// }
kaartenboek.schud();  // test ok

if (kaartenboek.isLeeg()){
    console.log("*** alle kaarten zijn opgevraagd ***");  
}
else{
    console.log("*** er zijn nog niet opgevraagde kaarten ***"); // YEP
}
console.log("kaarten een voor een vragen na creatie:");
for (var i = 0; i < kaartenboek.speelkaarten.length; i++) {
    console.log(kaartenboek.volgendeKaart().omschrijving());
}  // test ok
if (kaartenboek.isLeeg()){
    console.log("*** alle kaarten zijn opgevraagd ***");  // YEP
}
else{
    console.log("*** er zijn nog niet opgevraagde kaarten ***");
}
kaartenboek.schud();  //start terug met volledig boek en schud de kaarten
if (kaartenboek.isLeeg()){
    console.log("*** alle kaarten zijn opgevraagd ***");  
}
else{
    console.log("*** na schudden starten we terug met een volledig boek ***"); // YEP
}
console.log("kaarten een voor een vragen na schudden:");
for (var i = 0; i < kaartenboek.speelkaarten.length; i++) {
    console.log(kaartenboek.volgendeKaart().omschrijving());
}
