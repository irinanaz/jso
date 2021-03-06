import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'vbhttp',
  templateUrl: './vbhttp.component.html',
  styleUrls: ['./vbhttp.component.css']
})
export class VbHttpComponent implements OnInit {
  customers: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // http request te versturen -> get ('string met url naar object any') = asynchrone
    this.http.get('https://www.w3schools.com/angular/customers.php').subscribe(
      data => {  // functie als antw goed gekregen. Object zit dan in data
        this.customers = data["records"]; 
      }, 
      // records dat is een object uit de link. we kunnen halen alles wat we willen uit.
    // met [ ] maken we een array.en zetten in customers.
      error => {  // functie als antw met fout
        console.log("Er is iets fout gelopen tijdens het opvragen van de gegevens.");
        console.log(error.message);
      });
  }

}
