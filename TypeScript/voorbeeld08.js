/* static */
var Bankrekening = /** @class */ (function () {
    function Bankrekening(nummer, houder, saldo) {
        if (houder === void 0) { houder = ""; }
        if (saldo === void 0) { saldo = 0; }
        this.nummer = nummer;
        this.houder = houder;
        this.saldo = saldo;
    }
    ;
    Bankrekening.prototype.getSaldo = function () {
        return this.saldo;
    };
    Bankrekening.prototype.stort = function (bedrag) {
        this.saldo += bedrag;
    };
    Bankrekening.prototype.haalAf = function (bedrag) {
        this.saldo -= bedrag;
    };
    return Bankrekening;
}());
var Overschrijving = /** @class */ (function () {
    function Overschrijving(bronRekening, doelRekening, bedrag) {
        this.bronRekening = bronRekening;
        this.doelRekening = doelRekening;
        this.bedrag = bedrag;
    }
    Overschrijving.prototype.voeruit = function () {
        this.bronRekening.haalAf(this.bedrag);
        this.doelRekening.stort(this.bedrag);
        Overschrijving.aantalUitgevoerd++;
    };
    Overschrijving.aantalUitgevoerd = 0; // static => gemeenschappelijk voor alle instanties
    return Overschrijving;
}());
console.log("bij de start zijn er ", Overschrijving.aantalUitgevoerd, " overschrijvingen uitgevoerd");
var rek1 = new Bankrekening("0001", "Joske", 1111);
var rek2 = new Bankrekening("0002", "Jeanne", 2222);
console.log("rekeningen voor overschrijving:");
console.log(rek1);
console.log(rek2);
var overschrijving = new Overschrijving(rek2, rek1, 100);
overschrijving.voeruit();
console.log("rekeningen na overschrijving:");
console.log(rek1);
console.log(rek2);
console.log("op het einde zijn er ", Overschrijving.aantalUitgevoerd, " overschrijvingen uitgevoerd");
