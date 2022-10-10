import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private userService: UserService,
              private alertifyService: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm){
    const user = this.userService.authUser(loginForm.value);
    debugger;
    if (user){
      localStorage.setItem('token', user.email);
      this.alertifyService.successAlert('Login Sucessfully');
      this.router.navigate(['/']);
    } else {
      this.alertifyService.errorAlert('Login Failed, Check your email or password');
    }
  }

}
