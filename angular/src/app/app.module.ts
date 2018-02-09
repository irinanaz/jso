import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // nodig voor ngModel (-> 2 way binding)

import { AppComponent } from './app.component';
import { Oef00Component } from './oefeningen/oef00/oef00.component';
import { OefNotitieComponent } from './oefeningen/oefnotitie/oefnotitie.component';
import { VbForComponent } from './voorbeelden/vbfor/vbfor.component';
import { VbPipesComponent } from './voorbeelden/vbpipes/vbpipes.component';
import { VbForuitbrComponent } from './voorbeelden/vbfor/vbforuitbr.component';
import { OefBroodjesComponent } from './oefeningen/oefbroodjes/oefbroodjes.component';
import { OefHogerLagerComponent } from './oefeningen/oefhogerlager/oefhogerlager.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { VbHttpComponent } from './voorbeelden/vbhttp/vbhttp.component';
import { VbServiceComponent01 } from './voorbeelden/vbservice/vbservice01.component';
import { VbServiceComponent02 } from './voorbeelden/vbservice/vbservice02.component';

import { VbServiceComponent03 } from './voorbeelden/vbservice/vbservice03.component';
import { VbScholenService01 } from './voorbeelden/vbservice/vbservice01';
import { VbScholenService02 } from './voorbeelden/vbservice/vbservice02';
import { VbScholenService03 } from './voorbeelden/vbservice/vbservice03';

// TODO: alle componenten die in deze module gedefinieerd zijn importeren

@NgModule({
  declarations: [
    AppComponent,
    Oef00Component,
    OefNotitieComponent,
    VbForComponent,
    VbPipesComponent,
    VbForuitbrComponent,
    OefBroodjesComponent,
    OefHogerLagerComponent,
    VbHttpComponent,
    VbServiceComponent01,
    VbServiceComponent02,
    VbServiceComponent03
    // TODO: alle componenten die in deze module gedefinieerd zijn hier importeren
  ],
  imports: [
    BrowserModule,
    FormsModule,  //  nodig om 2 way binding te kunnen doen
    HttpClientModule
  ],
  providers: [VbScholenService03],
  // TODO: in bootstrap array (enkel) alle componenten opsommen
  // die horen bij user defined tags die in index.html gebruikt worden
  bootstrap: [VbServiceComponent03]
})
export class AppModule { }
