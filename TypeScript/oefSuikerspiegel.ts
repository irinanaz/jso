class SuikerSpiegel {
	private static readonly AANTALMETINGEN: number = 4;
	private static readonly HYPOGRENS: number = 60;
	private static readonly HYPERGRENS: number = 250;
	private datum: Date; // undefined
	private waarden: number[] = new Array<number>(SuikerSpiegel.AANTALMETINGEN);

	constructor(dag: number, maand: number, jaar: number) {
		this.datum = new Date(jaar, maand, dag);
	}

	toString(): string {
		let result: string;
		let datum = this.datum.toLocaleDateString("nl-BE");
		result = "Bloedsuikerwaarden op " + datum + ":\n" + this.waardenToString();
		return result;
	}

	private waardenToString(): string {
		let result: string = "";
		for (let i: number = 0; i < SuikerSpiegel.AANTALMETINGEN; i++) {
			result += this.waarden[i];
			if (this.isHypo(i)) {
				result += " HYPO";
			}
			if (this.isHyper(i)) {
				result += " HYPER";
			}
			result += "\n";
		}
		return result;
	}

	public noteer(metingNr: number, waarde: number): void {
		if (metingNr >= 0 && metingNr < SuikerSpiegel.AANTALMETINGEN) {
			this.waarden[metingNr] = waarde;
		}
	}

	public isHypo(index: number): boolean {
		let result: boolean = false;
		if (this.waarden[index] < SuikerSpiegel.HYPOGRENS) {
			result = true;
		}
		return result;
	}

	public isHyper(index: number): boolean {
		let result: boolean = false;
		if (this.waarden[index] > SuikerSpiegel.HYPERGRENS) {
			result = true;
		}
		return result;
	}

	public get aantalHypos(): number {
		let aantal: number = 0;
		for (let i: number = 0; i < SuikerSpiegel.AANTALMETINGEN; i++) {
			if (this.isHypo(i)) {
				aantal++;
			}
		}
		return aantal;
	}

	public get aantalHypers(): number {
		let aantal: number = 0;
		for (let i: number = 0; i < SuikerSpiegel.AANTALMETINGEN; i++) {
			if (this.isHyper(i)) {
				aantal++;
			}
		}
		return aantal;
	}
}

// hoofdprog
let spiegel1: SuikerSpiegel = new SuikerSpiegel(23, 10, 2014);
console.log("NA CREATIE");
console.log(spiegel1.toString());
console.log("aantal hypos: %s", spiegel1.aantalHypos);
console.log("aantal hypers: %s", spiegel1.aantalHypers);
spiegel1.noteer(0, 100);
spiegel1.noteer(1, 120);
spiegel1.noteer(2, 55);
spiegel1.noteer(3, 255);
spiegel1.noteer(4, 75);
spiegel1.noteer(-1, 66);
console.log("Na Noteer");
console.log(spiegel1.toString());
for (let i: number = 0; i < 4; i++) {
	let isHypo: boolean = spiegel1.isHypo(i);
	let isHyper: boolean = spiegel1.isHyper(i);
	console.log(i + (isHypo ? " hypo" : isHyper ? " hyper" : " ok"));
}
console.log("aantal hypos: %s", spiegel1.aantalHypos);
console.log("aantal hypers: %s", spiegel1.aantalHypers);
