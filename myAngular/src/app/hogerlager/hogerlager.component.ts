import { Component, OnInit } from '@angular/core';
import {HogerLager} from './randomInteger';

@Component({
  selector: 'hogerlager',
  templateUrl: './hogerlager.component.html',
  styleUrls: ['./hogerlager.component.css']
})

export class HogerlagerComponent implements OnInit {
  title: string = 'Speel Hoger-Lager';
  uwGokgetal : number= 0;
  getalTeRaden: HogerLager = new HogerLager();
  bericht: string ='';
 
  constructor() { 

  }
  geraden() {
    return this.getalTeRaden.geraden;
              }
  doeGok():void{
    this.bericht = this.getalTeRaden.werwerkGok(this.uwGokgetal);
  }
  reset(){
    this.getalTeRaden.reset();
    this.bericht = "";
    this.uwGokgetal = 0;
  } 
  ngOnInit() {
  }

}
