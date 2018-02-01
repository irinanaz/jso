class Lint{
    constructor(private _kleur: string, private _lengte: number){
    }

    verkort(lengtePerStuk: number, aantalstukken: number = 1): void{
        if(this._lengte >= lengtePerStuk * aantalstukken){
            this._lengte -= lengtePerStuk * aantalstukken;
        }
    }

    get lengte(): number{
        return this._lengte;
    }

    get kleur(): string{
        return this._kleur.toUpperCase();
    }

    getAantalStukken(gevraagdeLengte: number): number{
        return Math.floor( this._lengte / gevraagdeLengte );
    }
}

// hoofdprog
let lint = new Lint("rood", 1000);
console.log("NA CREATIE: een %s lint met lengte %s", lint.kleur, lint.lengte);
lint.verkort(0.5);
console.log("NA EERSTE VERKORTING: een %s lint met lengte %s", lint.kleur, lint.lengte);
lint.verkort(1, 3);
console.log("NA TWEEDE VERKORTING: een %s lint met lengte %s", lint.kleur, lint.lengte);
lint.verkort(2, 1000);
console.log("NA DERDE VERKORTING: een %s lint met lengte %s", lint.kleur, lint.lengte);

let lengte = 40;
console.log("Uit een lint van %s kun je %s stukken van %s knippen",
    lint.lengte, lint.getAantalStukken(lengte), lengte);