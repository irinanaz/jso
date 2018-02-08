

export class Broodje  {
    constructor (public naam: string, public prijs: number = 2.5){
        
    }
}
export class Bestellijn  {

    constructor (public naam: Broodje, public aantal: number){
        
    }
}
export class Bestelling  {
    
    bestelling = new Array <Bestellijn> ();
     
    voegLijnToe(newBestellijn): void {
        this.bestelling.push(newBestellijn);
        console.log(newBestellijn);  
      }
    totaalprijs(newBestellijn): number {
       return newBestellijn.prijs * newBestellijn.aantal;
      }
}
