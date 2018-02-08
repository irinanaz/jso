import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vbfor',
  templateUrl: './vbfor.component.html',
  styleUrls: ['./vbfor.component.css']
})
export class VbForComponent implements OnInit {
  naamPiraat: string;
  piraten = ["Jan", "Piet", "Joris", "Korneel"];
  constructor() {
    this.naamPiraat = '';
   }
  VoegPiraat():void{
      this.piraten.push(this.naamPiraat);
      console.log(this.piraten)
  }
  ngOnInit() {
  }

}
