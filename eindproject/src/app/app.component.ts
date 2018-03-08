import { Component } from '@angular/core';

import '../assets/app.css';
import * as $ from 'jquery'; 
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{
    ngOnInit(): void {
        
        this.styleHalen();
    }
    appSfeer: string;
    appBG: string;
    appBGimage: string ='';
    appFont: string;
    appColor: string;
    
    appGetBG(){
        let mystyleBG: string ="{'background-image': 'url(' + bgSelected.filelink + ')', 'background-size':'cover','background-repeat':'no-repeat;'}";
        return '';
    }
    appGetFont(){
        return '';
    }
    appGetBGcolor(){
        return '';
    }
    styleHalen(){
        let currentStyle = JSON.parse(localStorage.getItem('currentStyle'));
        if (localStorage.getItem('currentStyle')) {
          this.appBGimage = currentStyle.bgSelected.filelink;
          this.appBG = currentStyle.colorBG;
          this.appColor = currentStyle.myColor;
          this.appFont = currentStyle.myFont;
          
        }
        
      }
 }

//  [ngStyle]="{'height':'100vh','background-image': 'url(' + appBGimage + ')', '-webkit-background-size': 'cover','-moz-background-size': 'cover','-o-background-size': 'cover','background-attachment': 'fixed', 'background-size': 'cover','background-repeat':'no-repeat;' }" 