abstract class Figuur {
    constructor(public kleur: string, public soort: string) { }
    abstract get omtrek(): number;
    abstract get oppervlakte(): number;
}

class Cirkel extends Figuur {
    constructor(kleur: string, public straal: number) {
        super(kleur, "cirkel");
    }
    get omtrek(): number {
        return 2 * Math.PI * this.straal;
    }

    get oppervlakte(): number{
        return Math.PI * this.straal *  this.straal;
    }
}

class Rechthoek extends Figuur {
    constructor(kleur: string, public lengte: number, public breedte: number) {
        super(kleur, "rechthoek");
    }
    get omtrek(): number {
        return 2* (this.lengte + this.breedte);
    }
    get oppervlakte(): number{
        return this.lengte * this.breedte;
    }
}

let figuren: Figuur[] = new Array<Figuur>();
figuren.push(new Cirkel("rood", 10));
figuren.push(new Rechthoek("blauw", 2, 3));
figuren.push(new Rechthoek("groen", 4, 5));
figuren.push(new Cirkel("geel", 1.5));
for(let figuur of figuren){
    console.log("een %s met eigenschappen: ", figuur.soort);
    console.log("\tkleur: %s\tomtrek: %s\toppervlakte: %s", figuur.kleur, 
        figuur.omtrek, figuur.oppervlakte);
}