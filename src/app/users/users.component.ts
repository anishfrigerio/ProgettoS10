import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../user.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {
user!: User[];

constructor(private userSrv: UsersService, private route: ActivatedRoute){}

ngOnInit(): void {
 this.user = this.userSrv.fetchData();

  }

}
