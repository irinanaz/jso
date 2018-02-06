class Figuur {
    constructor(kleur, soort) {
        this.kleur = kleur;
        this.soort = soort;
    }
}
class Cirkel extends Figuur {
    constructor(kleur, straal) {
        super(kleur, 'cirkel');
        this.kleur = kleur;
        this.straal = straal;
        this.straal = straal;
    }
    get omtrek() {
        return this.straal * 2 * Math.PI;
    }
    get oppervlakte() {
        return this.straal * this.straal * Math.PI;
    }
}
class Rechthoek extends Figuur {
    constructor(kleur, lengte, breedte) {
        super(kleur, 'rechthoek');
        this.kleur = kleur;
        this.lengte = lengte;
        this.breedte = breedte;
        this.breedte = breedte;
        this.lengte = lengte;
    }
    get omtrek() {
        return (this.lengte + this.breedte) * 2;
    }
    get oppervlakte() {
        return this.lengte * this.breedte;
    }
}
let figuren = new Array();
figuren.push(new Cirkel("rood", 10));
figuren.push(new Rechthoek("blauw", 2, 3));
figuren.push(new Rechthoek("groen", 4, 5));
figuren.push(new Cirkel("geel", 1.5));
for (let figuur of figuren) {
    console.log("een %s met eigenschappen: ", figuur.soort);
    console.log("\tkleur: %s\tomtrek: %s\toppervlakte: %s", figuur.kleur, figuur.omtrek, figuur.oppervlakte);
}
