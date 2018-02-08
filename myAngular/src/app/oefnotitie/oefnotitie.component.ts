import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oefnotitie',
  templateUrl: './oefnotitie.component.html',
  styleUrls: ['./oefnotitie.component.css']
})
export class OefnotitieComponent implements OnInit {
  bericht: string;
  disableBtn : boolean;
  
  
  constructor() {
    this.bericht = '';
    this.disableBtn= true;
   }

   beschikbareCharakters(): number {
    let lengteMax= 100;
    return lengteMax - this.bericht.length ;
    
  }
 activeerKnop() {
  
   return this.bericht == '';
   
 }

 klikBewaren(): void {
    alert('Hallo!!!!!!!');
 }
 klikWissen(): void {
  this.bericht="";
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