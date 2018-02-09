import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'oefhttp',
  templateUrl: './oefhttp.component.html',
  styleUrls: ['./oefhttp.component.css']
})
export class OefHttpComponent implements OnInit {
  customers: any [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // http request te versturen -> get ('string met url naar object any') = asynchrone
    /* this.http.get('http://jsonplaceholder.typicode.com/users').subscribe( */
    this.http.get('http://jsonplaceholder.typicode.com/photos').subscribe(
      data => {  // functie als antw goed gekregen. Object zit dan in data
        this.customers = data as any[];  // hier data is een array van objecten. 
        console.log(this.customers);     //  we moeten array van ANY hebben -> gebruiken we AS ANY []
      }, 
      // records dat is een object uit de link. we kunnen halen alles wat we willen uit.
      // met [ ] maken we een array.en zetten in customers.
      error => {  // functie als antw met fout
        console.log("Er is iets fout gelopen tijdens het opvragen van de gegevens.");
        console.log(error.message);
      });
  }

}
