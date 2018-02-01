class Lint {
    constructor(kleur, _lengte) {
        this.kleur = kleur;
        this._lengte = _lengte;
    }
    get lengte() {
        return this._lengte;
    }
    set lengte(stuk) {
        if (stuk >= this._lengte) {
            this._lengte -= stuk;
        }
    }
    aantalStukken(lengte) {
        if (lengte > 0) {
            return Math.floor(this._lengte / lengte);
        }
        else
            console.log('foutmelding');
    }
    verkorten(lengteStuk, stukken = 1) {
        if (lengteStuk >= this._lengte) {
            this._lengte -= lengteStuk;
        }
        else
            console.log('te kort melding');
    }
}
let lint1 = new Lint("wit", 50);
console.log(lint1);
lint1.lengte = 5;
console.log('min 1 stuk van 1m' + lint1.verkorten(1));
console.log('min 3 stukken van 1m' + lint1.verkorten(1, 3));
