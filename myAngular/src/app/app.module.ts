import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Vb00Component } from './vb00/vb00.component';
import { Oef00Component } from './oef00/oef00.component'; 
import { OefnotitieComponent } from './oefnotitie/oefnotitie.component'; 
import { BroodjeComponent} from './broodje/broodje.component';
import { HogerlagerComponent } from './hogerlager/hogerlager.component';
import { OefHttpComponent } from './oefhttp/oefhttp.component';
import { OefMuntenService03 } from './oefservice/oefservice03';
import { OefServiceComponent03 } from './oefservice/oefservice03.component';


@NgModule({
  declarations: [
    AppComponent,
    Vb00Component,
    Oef00Component, 
    OefnotitieComponent,
    BroodjeComponent,
    HogerlagerComponent,
    OefHttpComponent,
    OefServiceComponent03
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [OefMuntenService03],
  bootstrap: [OefServiceComponent03] // namen van alle zelfgeschreven componenten die in index.html w momenteel gebruikt
})
export class AppModule { }
