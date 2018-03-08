import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AppComponent } from '../app.component';
@Component({
  selector: 'mijnenveger',
  templateUrl: './mijnenveger.component.html',
  styleUrls: ['./mijnenveger.component.css']
})
export class MijnenvegerComponent implements OnInit {
  
  constructor(private parentComponent: AppComponent) { }

  ngOnInit() {
  }

}
