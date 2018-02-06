import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Vb00Component } from './vb00/vb00.component'; // hier


@NgModule({
  declarations: [
    AppComponent,
    Vb00Component  // hier alle selectors
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, Vb00Component] // namen van alle zelfgeschreven componenten
})
export class AppModule { }
