var aantalUrenPerWeek = 40;
var percentageBonus = 10;
class Werknemer {
    constructor(voornaam, familienaam, _SZNr) {
        this.voornaam = voornaam;
        this.familienaam = familienaam;
        this._SZNr = _SZNr;
    }
    get sznr() {
        return this._SZNr;
    }
    ;
    set setsznr(nr) {
        this._SZNr = nr;
    }
    ;
}
class Vast extends Werknemer {
    constructor(voornaam, familienaam, sznummer, _loon) {
        super(voornaam, familienaam, sznummer);
        this._loon = _loon;
    }
    get loonTotaal() {
        return this._loon * aantalUrenPerWeek;
    }
    ;
}
class VastPerUur extends Werknemer {
    constructor(voornaam, familienaam, sznummer, _loon, _uren) {
        super(voornaam, familienaam, sznummer);
        this._loon = _loon;
        this._uren = _uren;
    }
    get loon() {
        return this._loon;
    }
    get uren() {
        return this._uren;
    }
    get loonTotaal() {
        if (this.uren >= aantalUrenPerWeek) {
            return this.loon * aantalUrenPerWeek + (this.loon * (this.uren - aantalUrenPerWeek) * 1.5);
        }
        else
            return this.loon * aantalUrenPerWeek;
    }
    ;
}
class VerkoopPerc extends Werknemer {
    constructor(voornaam, familienaam, sznummer, _verkoop) {
        super(voornaam, familienaam, sznummer);
        this._verkoop = _verkoop;
    }
    get verkoop() {
        return this._verkoop;
    }
    get loonTotaal() {
        return this.verkoop * percentageBonus * 0.01;
    }
    ;
}
class VerkoopVastPerc extends Werknemer {
    constructor(voornaam, familienaam, sznummer, _loon, _verkoop) {
        super(voornaam, familienaam, sznummer);
        this._loon = _loon;
        this._verkoop = _verkoop;
    }
    get loon() {
        return this._loon;
    }
    get verkoop() {
        return this._verkoop;
    }
    set loonBonus(newLoon) {
        this._loon = newLoon;
    }
    get loonTotaal() {
        return this.loon + this.verkoop * percentageBonus / 100;
    }
    ;
}
let werknemers = new Array();
werknemers.push(new Vast("Jan", "Fam", 1110, 25));
werknemers.push(new Vast("Jean", "Pin", 1113, 27));
werknemers.push(new VerkoopPerc("Choe", "Praline", 1114, 250));
werknemers.push(new VerkoopPerc("Gil", "Mils", 1115, 500));
werknemers.push(new VastPerUur("Rode", "Kapje", 1112, 35, 35));
werknemers.push(new VastPerUur("Blauw", "Kapje", 1122, 35, 43));
werknemers.push(new VerkoopVastPerc("Groene", "Kapje", 1144, 15, 500));
werknemers.push(new VerkoopVastPerc("Gele", "Kapje", 2200, 15, 500));
for (let werknemer of werknemers) {
    let bonus = 1;
    if (werknemer instanceof VerkoopVastPerc) {
        bonus = 1.1;
        werknemer.loonBonus = bonus * werknemer.loon;
    }
    console.log(werknemer.voornaam + ' ' + werknemer.familienaam + ': ' + werknemer.loonTotaal * bonus);
}
