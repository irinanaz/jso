import { question } from "readline-sync";

// var toetsenbord = require('readline-sync');

class SuikerSpiegel {
    private static  aantalHypos: number = 0;
    private static  aantalHypers: number = 0;
    static  aantal: number = 0;  // dat moet nog private zijn 
    //dus nog een get methode te schrijven om deze gegevens te tonen
    // methoden kunnen ook private zijn
    private datum: Date;
    private waarden: number[] = new Array<number>();
    constructor(dag: number, maand: number, jaar:number){
        this.datum = new Date(jaar, maand-1, dag);
    };

    noteer(metingNr:number,waarde:number): void{
        // hier kan nog een invoer controlle komen voor invoer fouten/waarden
        this.waarden[metingNr] = waarde;
        SuikerSpiegel.aantal++;
        if (waarde<60)
            { SuikerSpiegel.aantalHypos++;}
        else 
            if (waarde <250) {SuikerSpiegel.aantalHypers++;}
    }
    geefStatusHypo(index): boolean {
        return this.waarden[index]<60;
    }
    geefStatusHyper(index): boolean {
        return this.waarden[index]>250;
         
    }   
}
var dag = 22;
var maand = 1;
var jaar = 2017;

var waardenArray = new Array();
let spiegel1: SuikerSpiegel = new SuikerSpiegel (jaar, maand, dag);
spiegel1.noteer(1,50);
spiegel1.noteer(2,160);
spiegel1.noteer(2,260);

console.log(spiegel1.geefStatusHypo(1), spiegel1.geefStatusHyper(1));
console.log(spiegel1.geefStatusHypo(2), spiegel1.geefStatusHyper(2));
console.log(spiegel1.geefStatusHypo(3), spiegel1.geefStatusHyper(3));
console.log(SuikerSpiegel.aantal);


