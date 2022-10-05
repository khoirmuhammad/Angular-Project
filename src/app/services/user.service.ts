import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

addUser(data: User){
  debugger;
  let users = [];
  if (localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('Users') as string);
    users = [data, ...users];
  } else {
    users = [data];
  }

  localStorage.setItem('Users', JSON.stringify(users));
}

}
