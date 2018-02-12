import { Component, OnInit } from '@angular/core';
import { OefMuntenService03 } from './oefservice03';


@Component({
  selector: 'oefservice03',
  templateUrl: './oefservice.component.html',
  styleUrls: ['./oefservice.component.css']
})
export class OefServiceComponent03 implements OnInit {
  title: 'Currency convertor';
  private dropLijst: any [];
  aantalBase: number=0;
  aantalResult : number;
  baseMunt: string;
  resultMunt : string;
  baseLink: string = 'https://api.fixer.io/latest'
  constructor(private muntenService: OefMuntenService03) {
    
   }

  convert(){
    this.muntenService.getMunten(this.baseLink+'?base='+this.baseMunt).subscribe(
        data => {
        this.aantalResult = data["rates"][this.resultMunt] * this.aantalBase;
    });
  }

  ngOnInit() {
 
    this.muntenService.getMunten(this.baseLink).subscribe(
      data => {
        this.dropLijst = ['EUR'];
        for (let rate in data["rates"]){     //enkele de index   
          this.dropLijst.push(rate);
          this.dropLijst.sort();
          this.baseMunt="EUR";
          this.resultMunt="EUR";
          console.log(rate);
        };
      });
  }
}