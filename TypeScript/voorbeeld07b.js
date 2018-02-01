/* class met autom. gegenereerde props */
var BankrekeningMetAutomProp = /** @class */ (function () {
    /*
    private nummer: string; // private => can only be accessed inside containing class
    private saldo: number;
    houder: string;  // default visibiliteit: public
    */
    // door een access modifier (private, public, protected)
    // voor een parameter van de constr te schrijven,
    // maakt TypeScript autom. een prop met die naam
    function BankrekeningMetAutomProp(nummer, houder, saldo) {
        if (houder === void 0) { houder = ""; }
        if (saldo === void 0) { saldo = 0; }
        this.nummer = nummer;
        this.houder = houder;
        this.saldo = saldo;
        /*
        this.nummer = nummer;
        this.saldo = saldo;
        */
    }
    BankrekeningMetAutomProp.prototype.toString = function () {
        return "het saldo van rekening " + this.nummer + " is " + this.saldo;
    };
    BankrekeningMetAutomProp.prototype.getSaldo = function () {
        return this.saldo;
    };
    BankrekeningMetAutomProp.prototype.stort = function (bedrag) {
        this.saldo += bedrag;
    };
    BankrekeningMetAutomProp.prototype.haalAf = function (bedrag) {
        this.saldo -= bedrag;
    };
    return BankrekeningMetAutomProp;
}());
var rekeninga = new BankrekeningMetAutomProp("0001", "Joske", 500);
console.log("rekening van Joske na creatie:");
console.log(rekeninga.toString());
// rekeninga.saldo = 1000;  // compileerfout (saldo is private)
rekeninga.houder = "Joske Vermeulen";
console.log("rekening na wijziging van props:");
console.log(rekeninga);
rekeninga.stort(1000);
console.log("rekening na storting:");
console.log(rekeninga);
var rekeningb = new BankrekeningMetAutomProp("0002", "Jeanne", 500);
console.log("rekening van Jeanne na creatie:");
console.log(rekeningb);
rekeningb.stort(100);
rekeningb.haalAf(20);
console.log("rekening van Joske:");
console.log(rekeninga);
console.log("rekening van Jeanne:");
console.log(rekeningb);
