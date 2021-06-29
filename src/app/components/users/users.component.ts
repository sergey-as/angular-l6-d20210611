import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services";
import {User} from "../../models";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  xxx = 'asdqwe';

  changexxx(newval: string) {
    this.xxx = newval;
  }

  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this
      .userService
      .getUsers()
      .subscribe(value => this.users = value);
  }

  search(input: HTMLInputElement) {
    this
      .userService
      .getUsersByName(input.value)
      .subscribe(value => this.users = value);
  }
}
