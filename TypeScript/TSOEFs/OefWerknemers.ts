
var aantalUrenPerWeek = 40;
var percentageBonus = 10;
abstract class Werknemer {
    constructor(public voornaam: string, public familienaam: string, private _SZNr: number){
    }
    get sznr(){
        return this._SZNr;
    }; 
    set setsznr(nr){
        this._SZNr = nr;
    };  
    abstract get loonTotaal(): number;
}   

class Vast extends Werknemer {
    
    constructor(voornaam: string, familienaam: string, sznummer: number, private _loon: number) { 
        super(voornaam, familienaam, sznummer); 
    
    }
    get loonTotaal(): number{
        return this._loon * aantalUrenPerWeek;
    };
}
class VastPerUur extends Werknemer {
    
    constructor(voornaam: string, familienaam: string, sznummer: number, 
                    private _loon: number, private _uren : number) { 
        super(voornaam, familienaam, sznummer); 
       
    }
    get loon():number{
        return this._loon;
    }
    get uren():number{
        return this._uren;
    }
    get loonTotaal(): number{
        if (this.uren >= aantalUrenPerWeek){
            return this.loon * aantalUrenPerWeek + (this.loon * (this.uren - aantalUrenPerWeek)*1.5);
        } else return this.loon*aantalUrenPerWeek;
    
    };
}

class VerkoopPerc extends Werknemer {
    
    constructor(voornaam: string, familienaam: string, sznummer: number, 
                private _verkoop: number) { 
        super(voornaam, familienaam, sznummer); 
       
    }
    get verkoop():number{
        return this._verkoop;
    }
    
    get loonTotaal(): number{
           return this.verkoop * percentageBonus*0.01;
    };
}
class VerkoopVastPerc extends Werknemer {
    
    constructor(voornaam: string, familienaam: string, sznummer: number, 
        private _loon: number,  private _verkoop: number) { 
        super(voornaam, familienaam, sznummer); 
       
    }
    get loon():number{
        return this._loon;
    }
    get verkoop():number{
        return this._verkoop;
    }
    set loonBonus(newLoon){
        this._loon = newLoon;
    }
    
    get loonTotaal(): number{
           return this.loon + this.verkoop * percentageBonus/100;
    };
}
/* deel 2
class Payroll {
    static count: number = 0;
    private employees: Werknemer [] = new Array<Werknemer>();
    addEmployee (werknemer: Werknemer){
        this.employees.push(werknemer);
        Payroll.count ++;
    }
    get getEmployee(i: number) {
        return  this.employees[i];
    }
    get count(): number{
        return this.employees.length;
    }
    get totalEarnings(): number{
        return this.employees.map(emp => epm.earnings).reduce((total, earning)=>total + earning);
    }

    toString(): string{
        return this.voornaam +' '+this.achternaam + " loon: " + this.loon; 
    }
} 
*/
let werknemers: Werknemer[] = new Array<Werknemer>();
werknemers.push(new Vast("Jan", "Fam",1110, 25));
werknemers.push(new Vast("Jean", "Pin", 1113, 27));
werknemers.push(new VerkoopPerc("Choe","Praline" , 1114, 250));
werknemers.push(new VerkoopPerc("Gil", "Mils", 1115, 500));
werknemers.push(new VastPerUur("Rood","Kapje",1112, 35, 35));
werknemers.push(new VastPerUur("Blauw","Kapje", 1122, 35, 43));
werknemers.push(new VerkoopVastPerc("Groen","Kapje",1144, 15, 500));
werknemers.push(new VerkoopVastPerc("Geel","Kapje", 2200, 15, 500));
for(let werknemer of werknemers){
    let bonus = 1;
    if (werknemer instanceof VerkoopVastPerc ) {
        bonus = 1.1;
        werknemer.loonBonus = bonus*werknemer.loon; // hier gebruiken als property
    }
    console.log( werknemer.voornaam +' '+ werknemer.familienaam +': '+ werknemer.loonTotaal*bonus);
}

/* deel2 
let payroll: Payroll = new Payroll();
for (let employee of werknemers) {
    if (employee != undefined) {
        payroll.addEmployee(employee);
    }
}
for (let i: number = 0; i < payroll.count; i++) {
    console.log(payroll.getEmployee(i).toString());
}
let totalEarnings: number = payroll.totalEarnings;
console.log("Total earnings: %s", totalEarnings);

*/