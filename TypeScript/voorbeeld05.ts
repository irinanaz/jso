/* readonly prop */

class Cirkel{
    readonly straal: number;
    constructor(straal){
        this.straal = straal;
    }
    oppervlakte(): number{
        //this.straal += 1;  // compileerfout
        return Math.PI * this.straal * this.straal;
    } 
}

let cirkel: Cirkel = new Cirkel(10);
console.log(cirkel.oppervlakte());

