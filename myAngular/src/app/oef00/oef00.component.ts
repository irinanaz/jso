import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oef00',
  templateUrl: './oef00.component.html',
  styleUrls: ['./oef00.component.css']
})
export class Oef00Component implements OnInit {
  aantal:number;
  prijs: number;
  constructor() {
    this.aantal = 1;
    this.prijs = 1.00;
   }

  totaaBedrag(): number{
    return this.aantal * this.prijs;
  }

  ngOnInit() {
  }

}





// export class VbDatabindingComponent implements OnInit {
//   kolomhoofding: string;
//   naam: string;
//   voornaam: string;

//   constructor() { 
//     this.naam = "Vermeulen";
//     this.voornaam = "Joske";
//   }

//   ngOnInit() {
//   }

//   volledigeNaam(): string{
//     return this.voornaam + " " + this.naam.toUpperCase();
//   }

//   klikHandler(): void{
//     alert("Hallo, " + this.volledigeNaam());
//   }

// }