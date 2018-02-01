/* class met accessors (getter en setter) */
class BankrekeningMetProp {
    constructor(nummer, houder = "", _saldo = 0) {
        this.nummer = nummer;
        this.houder = houder;
        this._saldo = _saldo;
    }
    toString() {
        return "het saldo van rekening " + this.nummer + " is " + this._saldo;
    }
    // getters en setters laten toe om
    // bij gebruik/oproep te doen alsof saldo een membervar is
    // get => opvragen v.d. prop mogelijk
    get saldo() {
        return this._saldo;
    }
    // set => toekennen aan prop mogelijk
    // de parameter van de setter stelt de waarde voor die men probeert toe te kennen
    // (i.e. rechterkant van toekenning)
    // in een setter kun je controleren of de nieuwe waarde geldig is
    // alvorens ze toe te kennen aan de membervar
    set saldo(nieuwSaldo) {
        if (nieuwSaldo > 0) {
            this._saldo = nieuwSaldo;
        }
    }
    get saldoInJeDromen() {
        return this._saldo * 1000000;
    }
    stort(bedrag) {
        this._saldo += bedrag;
    }
    haalAf(bedrag) {
        this._saldo -= bedrag;
    }
}
let rekening = new BankrekeningMetProp("0001", "Joske", 500);
console.log("rekening van Joske na creatie:");
console.log(rekening.toString());
// opvragen via getter:
console.log("saldo van de rekening na creatie: %s", rekening.saldo);
// wijzigen via setter:
rekening.saldo = 1000; // nu wel ok
rekening.houder = "Joske Vermeulen";
console.log("rekening na wijziging van props:");
console.log(rekening);
rekening.stort(1000);
console.log("rekening na storting:");
console.log(rekening);
console.log("saldo van de rekening in je dromen: %s", rekening.saldoInJeDromen);
// rekening.saldoInJeDromen = 1000000;  // compileerfout; want er is geen setter gedefinieerd voor saldoInJeDromen
