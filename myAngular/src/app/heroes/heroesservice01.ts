// stap 3
// getScholen geeft Observable terug

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../herodetail/constructors';
import { HEROES } from '../herodetail/mock-heroes';
// Observable => wijzigingen aan observable worden gemeld aan subscribers


// Injectable => client moet object niet zelf maken
@Injectable()
export class HeroesService01 {
     getHeroes():Hero[] {
        //return this.http.get<Hero[]>("../herodetail/mock-heroes.ts");  }
        return HEROES;
     }
 
}