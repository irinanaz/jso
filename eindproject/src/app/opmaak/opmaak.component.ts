import { Component, OnInit } from '@angular/core';
import { Opmaakbg,OpmaakFnt, bgKAART, fontKAART } from '../_models/opmaakbg';
import { AppComponent } from '../app.component';

// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

let defColor = 'rgba(0,0,0,.7)';
let defBGColor = 'rgba(0,0,0,.)';  //#66cc00 , color:rgba(0,0,0,.7);
let defFont = '"Roboto", sans-serif';

@Component({
  selector: 'opmaak',
  templateUrl: './opmaak.component.html',
  styleUrls: ['./opmaak.component.css']
})


export class OpmaakComponent implements OnInit {
  title:string = 'Choose your style';
  bgKaart = bgKAART;
  fontKaart = fontKAART;
  // photo = 'http://localhost:4200/bg-k1.0ae403290c5930a158a4.jpg';
  bgSelected: Opmaakbg = new Opmaakbg ('','',''); 
  colorBG: string = defBGColor;
  myColor: string = defColor;
  myFont: string = defFont;

  constructor( private parentComponent: AppComponent) { 
    
  } 
  // styleAanpassen(){
  //   this.
  // }
  getColor(e){
    return e;
  }
  ngOnInit() {
    this.styleHalen();
    }
  
  styleBewaren(){
    // stijl aanpassen
    console.log(this.bgSelected);
    let currentStyle = {
      bgSelected : this.bgSelected,
      colorBG : this.colorBG,
      myColor : this.myColor,
      myFont : this.myFont
    }
    localStorage.setItem('currentStyle', JSON.stringify(currentStyle));
    this.parentComponent.appBG = this.colorBG;
    this.parentComponent.appBGimage = this.bgSelected.filelink;
  }
  setPreview(){
    // this.parentComponent.appSfeer = this.bgSelected.sfeername;
    // this.parentComponent.appBG = this.colorBG;
    this.parentComponent.appBGimage = this.bgSelected.filelink;
    // this.parentComponent.appFont = this.myFont;
    // this.parentComponent.appColor = this.colorBG;
    this.parentComponent.appGetBG();
  }
  styleHalen(){
    let currentStyle = JSON.parse(localStorage.getItem('currentStyle'));
    if (localStorage.getItem('currentStyle')) {
      this.bgSelected = currentStyle.bgSelected;
      this.colorBG = currentStyle.colorBG;
      this.myColor = currentStyle.myColor;
      this.myFont = currentStyle.myFont;
      // doorgeven aan app:
      this.parentComponent.appSfeer = this.bgSelected.sfeername;
      this.parentComponent.appBG = this.colorBG;
      this.parentComponent.appBGimage = this.bgSelected.filelink;
      this.parentComponent.appFont = this.myFont;
      this.parentComponent.appColor = this.colorBG;
    }else {
      //set default styles:
      this.styleReset();
    }
  }
  imageReset(){
    this.bgSelected = new Opmaakbg ('','','');
    this.parentComponent.appBGimage = this.bgSelected.filelink;
  }
  bgcolorReset(){
    this.colorBG = defBGColor;
    this.parentComponent.appBG = this.colorBG;
  }
  colorReset(){
    this.myColor = defColor;
    this.parentComponent.appColor = this.colorBG;
  }
  fontReset(){
    this.myFont= defFont;
    this.parentComponent.appColor = this.colorBG;
    this.parentComponent.appFont = this.myFont;
  }
  styleReset(){
    // this.photo = 'http://localhost:4200/bg-k1.0ae403290c5930a158a4.jpg';
    this.bgSelected = new Opmaakbg ('','',''); 
    this.colorBG = defBGColor;
    this.myColor = defColor;
    this.myFont= defFont;
    this.parentComponent.appSfeer = this.bgSelected.sfeername;
    this.parentComponent.appBG = this.colorBG;
    this.parentComponent.appBGimage = this.bgSelected.filelink;
    this.parentComponent.appFont = this.myFont;
    this.parentComponent.appColor = this.colorBG;
    localStorage.removeItem('currentStyle');
  }

}
// if (localStorage.getItem('currentUser'))
// let currentUser = JSON.parse(localStorage.getItem('currentUser'));