/* class */
class Bankrekening {
    private nummer: string; // private => can only be accessed inside containing class
    private saldo: number;  // niet beschikbaar van vuiten , enkel via methode
    houder: string;  // default visibiliteit: public - beschikbaar en overschrijfbaar
    constructor(nummer: string, houder = "", saldo = 0) { // parameters voor deze functie/constructor
        this.nummer = nummer;
        this.houder = houder;
        this.saldo = saldo;
    }
    // of korter . Private/public maken een parameter, type van parameter, waarde van parameter
    // constructor(private nummer: string, public houder = "", private saldo = 0)
    toString(): string{
        return "het saldo van rekening " + this.nummer + " is "+ this.saldo;
    }
    getSaldo(): number{
        return this.saldo;
    }
    stort(bedrag: number): void{
        this.saldo += bedrag;
    }
    haalAf(bedrag: number): void{
        this.saldo -= bedrag;
    }
}

let rekening1: Bankrekening = new Bankrekening("0001", "Joske", 500);// definitie en waarde geven
console.log("rekening van Joske na creatie:")
console.log(rekening1.toString());  
// rekening1.saldo = 1000;  // compileerfout (als saldo is private) - beschermd 
rekening1.houder = "Joske Vermeulen";
console.log("rekening na wijziging van props:")
console.log(rekening1);
rekening1.stort(1000);
console.log("rekening na storting:")
console.log(rekening1);


let rekening2: Bankrekening = new Bankrekening("0002", "Jeanne", 500);
console.log("rekening van Jeanne na creatie:")
console.log(rekening2);
rekening2.stort(100);
rekening1.haalAf(20);
console.log("rekening van Joske:")
console.log(rekening1);
console.log("rekening van Jeanne:")
console.log(rekening2);