import { Component, OnInit } from '@angular/core';
import { Hero } from '../herodetail/constructors';
import { HEROES } from '../herodetail/mock-heroes';
import { HeroesService01 } from './heroesservice01';
@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title : string = 'Heldenoverzicht';
  heroes: Hero[];
  enkelBesch : boolean = false;
  melding : string = 'er zijn veel helden';
  constructor(private heroesService: HeroesService01) { }


  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

}
