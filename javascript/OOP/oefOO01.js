function Hond(naam, ras, gewicht) {
	this.naam = naam;
	this.ras = ras;
	this.gewicht = gewicht;
}

Hond.prototype.blaf = function () {
	if (this.gewicht < 10) {
		return "kefkefkefkefkef";
	}
	else {
		if (this.gewicht > 30) {
			return "WOEFWOEF";
		}
		else {
			return "waf";
		}
	}
};

var fido = new Hond("Fido", "beagle", 38);
var fluffy = new Hond("Fluffy", "poedel", 30);
var flavie = new Hond("Flavie", "chihuahua", 9.5);
var honden = [fido, fluffy, flavie];

for (var i = 0; i < honden.length; i++) {
	var size = "kleine";
	if (honden[i].gewicht > 10) {
		size = "grote";
	}
	console.log(honden[i].naam, " is een ", size, " " + honden[i].ras);
	console.log(honden[i].blaf());
}