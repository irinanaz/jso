// stap 3
// getScholen geeft Observable terug

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// Observable => wijzigingen aan observable worden gemeld aan subscribers
import { Munt } from './model';

// Injectable => client moet object niet zelf maken
@Injectable()
export class OefMuntenService03 {
     getMunten():Observable<Munt[]> {
        return this.http.get<Munt[]>("http://datasets...");
     }
 
     constructor(private http: HttpClient) {
     }
}