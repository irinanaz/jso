<<<<<<< HEAD
// 'use strict';
// var KLEUR = ["Harten", "Klaveren", "Schoppen", "Ruiten"];
// var KLEURcode = ["h", "c", "s", "d"];
// var WAARDE = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "boer", "dame", "heer"];
// var PUNTEN = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// var maxKaarten = 52;

// function Speelkaart(kleur, waarde, afb) {
//     this.kleur = kleur; // 4kleuren;
//     this.waarde = waarde; // 13 kaarten
//     this.afbeelding = afb;
// }

// Speelkaart.prototype.omschrijving = function () {
//     return this.kleur + ' ' + this.waarde;


// }

// function Speelkaartenboek() {
//     this.speelkaarten = new Array();
//     this.index = 0;
//     for (var k = 0; k < KLEUR.length; k++) {
//         for (var w = 0; w < WAARDE.length; w++) {
//             var kaart = new Speelkaart(KLEUR[k], WAARDE[w], "images/"+(w + 1) + KLEURcode[k] + ".png");
//             //console.log(kaart);
//             this.speelkaarten.push(kaart);
//         }
//     }
// }

// Speelkaartenboek.prototype.schud = function () {
//     var newBoekTmp = new Array();
//     var indx;
//     for (var i = 0; i < this.speelkaarten.length;) {
//         indx = Math.floor(Math.random() * this.speelkaarten.length);
//         newBoekTmp.push(this.speelkaarten[indx]);
//         this.speelkaarten.splice(indx, 1);
//     }
//     // console.log(newBoekTmp);
//     this.speelkaarten = newBoekTmp;
//     // console.log(this.speelkaarten); // test ok
//     this.index = 0;
// }

// Speelkaartenboek.prototype.volgendeKaart = function () {

//     return this.speelkaarten[this.index++];

// }
// Speelkaartenboek.prototype.isLeeg = function(){
//     if (this.index == maxKaarten){
//         return true;
//     } else return false;
// }
function Hand() {
    this.speelkaarten = new Array();
    
}
Hand.prototype.punten = function () {
    var puntenHand=0;
    for(var i = 0; i<this.speelkaarten.length;i++){
        puntenHand += WAARDE.indexOf(this.speelkaarten[i].waarde)+1;
    }
    return puntenHand;
=======
'use strict';

function Speelkaart(kleur, waarde, punten, afbeelding) {
    this.kleur = kleur;
    this.waarde = waarde;
    this.punten = punten;
    this.afbeelding = afbeelding;
}

Speelkaart.prototype.omschrijving = function () {
    return this.kleur + " " + this.waarde;
}

function Speelkaartenboek() {
    var afkortingenKleuren = ['h', 's', 'd', 'c'];
    this.speelkaarten = [];
    this.index = 0;
    for (var kleur = 0; kleur < this.kleuren.length; kleur++) {
        for (var waarde = 0; waarde < this.waarden.length; waarde++) {
            this.speelkaarten.push(new Speelkaart(this.kleuren[kleur], this.waarden[waarde], waarde + 1, (waarde + 1) + afkortingenKleuren[kleur] + ".png"));
        }
    }
}

Speelkaartenboek.prototype.kleuren = ["harten", "schoppen", "ruiten", "klaveren"];
Speelkaartenboek.prototype.waarden = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "boer", "dame", "heer"];
Speelkaartenboek.prototype.volgendeKaart = function () {
    if (this.index < this.speelkaarten.length) {
        return this.speelkaarten[this.index++];
    }
    return null;
}
Speelkaartenboek.prototype.schud = function () {
    for (var kaart = 0; kaart < this.speelkaarten.length; kaart++) {
        var indexWissel = Math.floor(Math.random() * this.speelkaarten.length);
        var tmp = this.speelkaarten[kaart];
        this.speelkaarten[kaart] = this.speelkaarten[indexWissel];
        this.speelkaarten[indexWissel] = tmp;
    }
    this.index = 0;
}
Speelkaartenboek.prototype.isLeeg = function () {
    return this.index == this.speelkaarten.length;
}

function Hand() {
    this.speelkaarten = [];
>>>>>>> 8d6dcf91626672c2ac52444c07b97640acbf6952
}

Hand.prototype.voegKaartToe = function (kaart) {
    this.speelkaarten.push(kaart);
}
<<<<<<< HEAD
Hand.prototype.magStoppen= function (){
    if(this.punten()<17){
        return false;
    } else { return true;}
}

Hand.prototype.isKapot= function(){
    if (this.punten()<=21) {
        return false;
    } else { return true;}

}
Hand.prototype.factor= function(){
    var puntenHand = this.punten();
    switch (true){
        case puntenHand < 19 : return 0;
        case puntenHand ==19 : return 1;
        case puntenHand ==20: return 2;
        case puntenHand == 21: return 3;
    }
}




// var kaartenboek = new Speelkaartenboek();
// var hand = new Hand();

// kaartenboek.schud();
// do {
//     var kaart = kaartenboek.volgendeKaart();
//     console.log(kaart.omschrijving());
//     hand.voegKaartToe(kaart);
//     console.log("punten hand: %d", hand.punten());
// } while (!hand.magStoppen());
// if (hand.isKapot()) {
//     console.log("Helaas, u bent uw inzet kwijt");
// }
// else {
//     console.log("U krijgt uw inzet %d keer terug", hand.factor());
// }
=======

Hand.prototype.punten = function () {
    var result = 0;
    for (var kaart = 0; kaart < this.speelkaarten.length; kaart++) {
        result += this.speelkaarten[kaart].punten;
    }
    return result;
}

Hand.prototype.magStoppen = function () {
    return this.punten() >= 17;
}

Hand.prototype.isKapot = function () {
    return this.punten() > 21;
}

Hand.prototype.factor = function () {
    switch (this.punten()) {
        case 21: return 3;
        case 20: return 2;
        case 19: return 1;
        default: return 0;
    }
}

/*
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
*/
>>>>>>> 8d6dcf91626672c2ac52444c07b97640acbf6952
