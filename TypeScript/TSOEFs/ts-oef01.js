var Lintje = /** @class */ (function () {
    function Lintje(kleur, _lengte) {
        this.kleur = kleur;
        this._lengte = _lengte;
    }
    Object.defineProperty(Lintje.prototype, "lengte", {
        get: function () {
            return this._lengte;
        },
        enumerable: true,
        configurable: true
    });
    Lintje.prototype.aantalStukken = function (lengte) {
        if (lengte > 0) {
            return Math.floor(this._lengte / lengte);
        }
        else
            console.log('foutmelding');
    };
    Lintje.prototype.verkorten = function (lengteStuk, stukken) {
        if (stukken === void 0) { stukken = 1; }
        if (lengteStuk >= this._lengte) {
            this._lengte -= lengteStuk;
        }
        else
            console.log('te kort melding');
    };
    return Lintje;
}());
var lint1 = new Lintje("wit", 50);
console.log(lint1);
// lint1.lengte = 5; 
console.log('min 1 stuk van 1m:  ' + lint1.verkorten(1));
console.log('min 3 stukken van 1m:  ' + lint1.verkorten(1, 3));
