import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-model/hero';

@Component({
  selector: 'hero-detail00',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent00 implements OnInit {
  hero: Hero = new Hero(1,"Mega Mindy", false);
  constructor() { }

  ngOnInit() {
  }

}
