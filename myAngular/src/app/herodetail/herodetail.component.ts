import { Component, OnInit } from '@angular/core';
import { Hero } from './constructors';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {
 // naamHero : string;
  //idHero: number;
  // beschikbaar: boolean;
  myHero : Hero = new Hero ( 11, 'Mega Mindy',true);
  
  constructor() { }

  ngOnInit() {
  }

}
