import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; // nodig om met deforms te werken

import { AppComponent } from './app.component';
import { VbDatabindingComponent} from './voorbeelden/vbdatabinding/vbdatabinding.component';

@NgModule({
  declarations: [
    AppComponent,VbDatabindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [VbDatabindingComponent]
})
export class AppModule { }
