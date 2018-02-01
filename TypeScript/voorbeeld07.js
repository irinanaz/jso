/* class */
var Bankrekening = /** @class */ (function () {
    function Bankrekening(nummer, houder, saldo) {
        if (houder === void 0) { houder = ""; }
        if (saldo === void 0) { saldo = 0; }
        this.nummer = nummer;
        this.houder = houder;
        this.saldo = saldo;
    }
    Bankrekening.prototype.toString = function () {
        return "het saldo van rekening " + this.nummer + " is " + this.saldo;
    };
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
var rekening1 = new Bankrekening("0001", "Joske", 500); // definitie en waarde geven
console.log("rekening van Joske na creatie:");
console.log(rekening1.toString());
// rekening1.saldo = 1000;  // compileerfout (als saldo is private) - beschermt
rekening1.houder = "Joske Vermeulen";
console.log("rekening na wijziging van props:");
console.log(rekening1);
rekening1.stort(1000);
console.log("rekening na storting:");
console.log(rekening1);
var rekening2 = new Bankrekening("0002", "Jeanne", 500);
console.log("rekening van Jeanne na creatie:");
console.log(rekening2);
rekening2.stort(100);
rekening1.haalAf(20);
console.log("rekening van Joske:");
console.log(rekening1);
console.log("rekening van Jeanne:");
console.log(rekening2);
