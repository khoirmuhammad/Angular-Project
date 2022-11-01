import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserRegister } from '../models/user';
import { environment } from 'src/environments/environment';
import { UserCredential } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

baseUrl = environment.baseUrl;

constructor(private http: HttpClient) { }

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

registerUser(data: UserRegister){
  return this.http.post(this.baseUrl + 'Account/Register', data);
}

authUser(data: UserCredential){
  return this.http.post(this.baseUrl + 'Account/Login', data);
}

}
