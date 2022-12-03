import { Component, OnInit } from '@angular/core';
import { getUsers } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  u: User | undefined
  error: any;
  constructor(private rt: ActivatedRoute) { }

  ngOnInit(): void {
    let x = this.rt.snapshot.params["id"];
    getUsers().then((users: User[]) => {
      this.u = users.find((element) => {
        if(x == element.id) {
          return true;
        } else {
          let error = "L'utente non esiste!";
          console.log(error)
          return false;
        }
      })
    })
  }

}
