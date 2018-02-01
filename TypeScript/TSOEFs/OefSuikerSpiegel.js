"use strict";
exports.__esModule = true;
// var toetsenbord = require('readline-sync');
var SuikerSpiegel = /** @class */ (function () {
    function SuikerSpiegel(dag, maand, jaar) {
        this.waarden = new Array();
        this.datum = new Date(jaar, maand - 1, dag);
    }
    ;
    SuikerSpiegel.prototype.noteer = function (metingNr, waarde) {
        this.waarden[metingNr] = waarde;
        SuikerSpiegel.aantal++;
        if (waarde < 60) {
            SuikerSpiegel.aantalHypos++;
        }
        else if (waarde < 250) {
            SuikerSpiegel.aantalHypers++;
        }
    };
    SuikerSpiegel.prototype.geefStatusHypo = function (index) {
        if (this.waarden[index] < 60) {
            return 'HYPO';
        }
        else
            return 'NoHypo';
    };
    SuikerSpiegel.prototype.geefStatusHyper = function (index) {
        if (this.waarden[index] > 250) {
            return 'HYPER';
        }
        else
            return 'NoHyper';
    };
    SuikerSpiegel.aantalHypos = 0;
    SuikerSpiegel.aantalHypers = 0;
    SuikerSpiegel.aantal = 0;
    return SuikerSpiegel;
}());
var dag = 22;
var maand = 1;
var jaar = 2017;
var waardenArray = new Array();
var spiegel1 = new SuikerSpiegel(jaar, maand, dag);
spiegel1.noteer(1, 50);
spiegel1.noteer(2, 160);
spiegel1.noteer(2, 260);
console.log(spiegel1.geefStatusHypo(1), spiegel1.geefStatusHyper(1));
console.log(spiegel1.geefStatusHypo(2), spiegel1.geefStatusHyper(2));
console.log(spiegel1.geefStatusHypo(3), spiegel1.geefStatusHyper(3));
console.log(SuikerSpiegel.aantal);
