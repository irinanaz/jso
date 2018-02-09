

export class Broodje  {
    constructor (public naam: string, public prijs: number = 2.5){
        
    }
}
export class Bestellijn  {

    constructor (public type: Broodje, public aantal: number){
    }
    totaalPrijsperLijn (): number {
        return this.type.prijs * this.aantal;
       }
}
export class Bestelling  {
    
    bestellingArray = new Array <Bestellijn> ();
     
    voegLijnToe(newBestellijn: Bestellijn): void {
        this.bestellingArray.push(newBestellijn);
        // console.log(newBestellijn);  
      }
    get totaalprijs(): number {
        let totaal: number = 0;
        for ( let i: number = 0; i< this.bestellingArray.length ; i++ ){
             totaal += this.bestellingArray[i].type.prijs * this.bestellingArray[i].aantal;
            }
        return totaal;
        }
    
}
