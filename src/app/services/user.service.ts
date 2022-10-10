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
  if (localStorage.getItem('users')){
    users = JSON.parse(localStorage.getItem('users') as string);
    users = [data, ...users];
  } else {
    users = [data];
  }

  localStorage.setItem('users', JSON.stringify(users));
}

authUser(data: any){
  debugger;
  let userArray = [];

  if (localStorage.getItem('users')){
    userArray = JSON.parse(localStorage.getItem('users') as string);
  }

  return userArray.find((f: any) => f.email === data.email && f.password === data.password);
}

}
