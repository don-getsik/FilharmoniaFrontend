import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = this.userService.getAll();
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

}
