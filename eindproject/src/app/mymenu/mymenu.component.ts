import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  selector: 'mymenu',
  templateUrl: './mymenu.component.html',
  styleUrls: ['./mymenu.component.css']
})
export class MymenuComponent implements OnInit {

  currentUser: User;
  

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
}

  // get currentUser(): User {
  //   return JSON.parse(localStorage.getItem('currentUser'));
  // }

  ngOnInit() {
  }

}

    
