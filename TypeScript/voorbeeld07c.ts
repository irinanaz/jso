/* class met accessors (getter en setter) */
class BankrekeningMetProp {
    constructor(private nummer: string, public houder = "", private _saldo = 0) {
    }  // verkorte notatie
    toString(): string{
        return "het saldo van rekening " + this.nummer + " is "+ this._saldo;
    }

    // getters en setters laten toe om
    // bij gebruik/oproep te doen alsof saldo een membervar is
    // get => opvragen v.d. prop mogelijk
    get saldo(): number{
        return this._saldo;
    }
    // set => toekennen aan prop mogelijk
    // de parameter van de setter stelt de waarde voor die men probeert toe te kennen
    // (i.e. rechterkant van toekenning)
    // in een setter kun je controleren of de nieuwe waarde geldig is
    // alvorens ze toe te kennen aan de membervar
    set saldo(nieuwSaldo: number){
        if(nieuwSaldo > 0){
            this._saldo = nieuwSaldo;
        }
    }
    get saldoInJeDromen(): number{
        return this._saldo * 1000000;
    }

    stort(bedrag: number): void{
        this._saldo += bedrag;
    }
    haalAf(bedrag: number): void{
        this._saldo -= bedrag;
    }
}

let rekening: BankrekeningMetProp = new BankrekeningMetProp("0001", "Joske", 500);
console.log("rekening van Joske na creatie:")
console.log(rekening.toString());  

// opvragen via getter:
console.log("saldo van de rekening na creatie: %s", rekening.saldo);
// wijzigen via setter:
rekening.saldo = 1000;  // nu wel ok

rekening.houder = "Joske Vermeulen";
console.log("rekening na wijziging van props:")
console.log(rekening);
rekening.stort(1000);
console.log("rekening na storting:")
console.log(rekening);

console.log("saldo van de rekening in je dromen: %s", rekening.saldoInJeDromen);
// rekening.saldoInJeDromen = 1000000;  // compileerfout; want er is geen setter gedefinieerd voor saldoInJeDromen

// terminal om get/ set te kunnen gebruiken> tsc --target ES6 voorbeeld07c.ts
/* class */
// class Bankrekening {
//     private nummer: string; // private => can only be accessed inside containing class
//     private saldo: number;  // niet beschikbaar van vuiten , enkel via methode
//     houder: string;  // default visibiliteit: public - beschikbaar en overschrijfbaar
//     constructor(nummer: string, houder = "", saldo = 0) { // parameters voor deze functie/constructor
//         this.nummer = nummer;
//         this.houder = houder;
//         this.saldo = saldo;
//     }
//     // of korter . Private/public maken een parameter, type van parameter, waarde van parameter
//     // constructor(private nummer: string, public houder = "", private saldo = 0)
//     toString(): string{
//         return "het saldo van rekening " + this.nummer + " is "+ this.saldo;
//     }
//     getSaldo(): number{
//         return this.saldo;
//     }
//     stort(bedrag: number): void{
//         this.saldo += bedrag;
//     }
//     haalAf(bedrag: number): void{
//         this.saldo -= bedrag;
//     }
// }