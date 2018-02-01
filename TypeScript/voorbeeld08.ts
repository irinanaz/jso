/* static */

class Bankrekening {
    constructor(private nummer: string, public houder = "", private saldo = 0) {
    };
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
class Overschrijving{
    static aantalUitgevoerd: number = 0;  // static => gemeenschappelijk voor alle instanties
    constructor(public bronRekening: Bankrekening, 
        public doelRekening: Bankrekening, public bedrag: number){
    }
    voeruit(): void {
        this.bronRekening.haalAf(this.bedrag);
        this.doelRekening.stort(this.bedrag);
        Overschrijving.aantalUitgevoerd++;
    }
}

console.log("bij de start zijn er ", Overschrijving.aantalUitgevoerd, " overschrijvingen uitgevoerd");
let rek1: Bankrekening = new Bankrekening("0001", "Joske", 1111);
let rek2: Bankrekening = new Bankrekening("0002", "Jeanne", 2222);
console.log("rekeningen voor overschrijving:");
console.log(rek1);
console.log(rek2);
let overschrijving: Overschrijving = new Overschrijving(rek2, rek1, 100);
overschrijving.voeruit();
console.log("rekeningen na overschrijving:");
console.log(rek1);
console.log(rek2);
console.log("op het einde zijn er ", Overschrijving.aantalUitgevoerd, " overschrijvingen uitgevoerd");