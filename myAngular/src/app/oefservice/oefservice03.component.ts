import { Component, OnInit } from '@angular/core';
import { OefMuntenService03 } from './oefservice03';


@Component({
  selector: 'oefservice03',
  templateUrl: './oefservice.component.html',
  styleUrls: ['./oefservice.component.css']
})
export class OefServiceComponent03 implements OnInit {
  title: 'Currency convertor';
  dropLijst: any [];



  constructor(private scholenService: OefMuntenService03) { }

  ngOnInit() {
    //scholenService.getScholen geeft een Observable terug
    // door in te schrijven (subscribe) op de observable,
    // zal de bijhorende callback uitgevoerd worden als 
    // dat resultaat verandert
    // this.scholenService.getScholen().subscribe(
    //   data => {
    //     this.scholen = [];
    //     data["data"].forEach(element => {
    //       this.scholen.push(new Munt(
    //         // element.naam, element.straat + " " + element.huisnummer,
    //         // element.postcode, element.district
    //       ));
    //     });
    //   });
  }
}