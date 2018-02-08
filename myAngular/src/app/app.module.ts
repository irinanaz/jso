import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { Vb00Component } from './vb00/vb00.component';
import { Oef00Component } from './oef00/oef00.component'; 
import { OefnotitieComponent } from './oefnotitie/oefnotitie.component'; 
import { BroodjeComponent} from './broodje/broodje.component';

@NgModule({
  declarations: [
    AppComponent,
    Vb00Component,
    Oef00Component, 
    OefnotitieComponent,
    BroodjeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [BroodjeComponent] // namen van alle zelfgeschreven componenten
})
export class AppModule { }
