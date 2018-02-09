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
    OefHogerLagerComponent
    // TODO: alle componenten die in deze module gedefinieerd zijn hier importeren
  ],
  imports: [
    BrowserModule,
    FormsModule,  //  nodig om 2 way binding te kunnen doen
  ],
  providers: [],
  // TODO: in bootstrap array (enkel) alle componenten opsommen
  // die horen bij user defined tags die in index.html gebruikt worden
  bootstrap: [OefHogerLagerComponent]
})
export class AppModule { }
