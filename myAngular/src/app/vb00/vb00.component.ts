import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vb00',
  templateUrl: './vb00.component.html',
  //template:'<h1>Having fun with Anguler</h1>'
  styleUrls: ['./vb00.component.css']
})
export class Vb00Component implements OnInit {

  constructor() { }
  greeting = 'Hello Everybody!';
  ngOnInit() {
  }

}
