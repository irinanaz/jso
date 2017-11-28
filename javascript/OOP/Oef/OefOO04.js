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
function ShowHond (naam, ras, gewicht, prijzen){
    //Hond.apply(this, arguments); of
    Hond.call(this, naam, ras, gewicht);
    this.aantalPrijzen = prijzen;

}
ShowHond.prototype = new Hond;
ShowHond.prototype.paradeer = function(wijze){
    console.log("%s is bezig met %s", this.naam,wijze);
}
ShowHond.prototype.winShow = function(){
    this.aantalPrijzen++;
}
// var fido = new Hond("Fido", "beagle", 38);
// var fluffy = new Hond("Fluffy", "poedel", 30);
// var flavie = new Hond("Flavie", "chihuahua", 9.5);
// var honden = [fido, fluffy, flavie];

// for (var i = 0; i < honden.length; i++) {
// 	var size = "kleine";
// 	if (honden[i].gewicht > 10) {
// 		size = "grote";
// 	}
// 	console.log(honden[i].naam, " is een ", size, " " + honden[i].ras);
// 	console.log(honden[i].blaf());
// }

var scotty = new ShowHond("Scotty", "Schotse terrier", 15, 0);
var beatrice = new ShowHond("Beatrice", "dwergkeeshond", 5, 3);
// showhonden kunnen alles wat gewone honden kunnen:
console.log(scotty.blaf());
// showhonden kunnen meer dan gewone honden:
scotty.paradeer("trappelen");
beatrice.paradeer("trippelen");

console.log(scotty.naam , " heeft al ", scotty.aantalPrijzen, " show(s) gewonnen.");
console.log(beatrice.naam , " heeft al ", beatrice.aantalPrijzen, " show(s) gewonnen.");
scotty.winShow();
console.log("Nu heeft ", scotty.naam , " " , scotty.aantalPrijzen, " show(s) gewonnen.");
console.log("Nu heeft ", beatrice.naam , " " , beatrice.aantalPrijzen, " show(s) gewonnen.");

/*  UITVOER:
waf
Scotty  is bezig met  trappelen
Beatrice  is bezig met  trippelen
Scotty  heeft al  0  show(s) gewonnen.
Beatrice  heeft al  3  show(s) gewonnen.
Nu heeft  Scotty   1  show(s) gewonnen.
Nu heeft  Beatrice   3  show(s) gewonnen.
*/