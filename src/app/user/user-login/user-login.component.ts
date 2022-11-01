import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';
import { User, UserCredential } from 'src/app/models/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userCredential: UserCredential = {};

  constructor(private userService: UserService,
              private alertifyService: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm){
    debugger;
    this.userCredential.password = loginForm.value.password;
    this.userCredential.username = loginForm.value.email.split('@')[0];

    this.userService.authUser(this.userCredential).subscribe(
      (response : UserCredential) => {
          localStorage.setItem('token', response.token ?? '');
          localStorage.setItem('username', response.username ?? '');

          this.alertifyService.successAlert('Login Sucessfully');
          this.router.navigate(['/']);
      }, error => {
        this.alertifyService.errorAlert(error.error);
      }
    );
  }

}
