import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { getUsers } from '../user.service';





@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: User[]
  constructor() {

}



  ngOnInit(): void {
    getUsers().then(users => {
      console.log(users)
      this.users = users;
      console.log(this.users);
    })

  }
}
