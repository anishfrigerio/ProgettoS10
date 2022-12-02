import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

user:User[] = []
  constructor() { }


   getUsers(){
    return fetch("http://localhost:3000/users/").then((res):
    Promise<User[]> => res.json())

  }


}
