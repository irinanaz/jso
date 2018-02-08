import { Component, OnInit } from '@angular/core';
import { Broodje, Bestellijn, Bestelling } from "./constructors";

@Component({
  selector: 'broodje',
  templateUrl: './broodje.component.html',
  styleUrls: ['./broodje.component.css']
})

export class BroodjeComponent implements OnInit {
  aantal: number;
  broodje: Broodje;
  broodjesKaart = new Array <Broodje> ( {naam: 'Kaas', prijs: 2.5} , {naam:'Hesp',prijs:2.8});
  bestellijn: Bestellijn;
  bestelling: Bestelling;
 
  bestellen (){
    let bestellijn = new Bestellijn(this.broodje, this.aantal);
    console.log(this.broodje, this.aantal);
    let bestelling = new Bestelling;
    bestelling.voegLijnToe(bestellijn);
    console.log(bestelling.totaalprijs);
  }

  
  ngOnInit() {
  }
  
}
