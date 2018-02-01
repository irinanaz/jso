/* readonly prop */

class Cirkel{
    readonly straal: number;   // in constructor kunt een waarde krijgen, maar niet veranderd w via methode
    constructor(straal1){
        this.straal = straal1;
    }
    oppervlakte(): number{  // methode 
        this.straal += 1;  // compileerfout - want hier staat readonly bij definitie
        return Math.PI * this.straal * this.straal;
    } 
}

let cirkel: Cirkel = new Cirkel(10);
console.log(cirkel.oppervlakte());

