import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,
              private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  loggedIn(){
    return localStorage.getItem('username');
  }

  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.alertifyService.successAlert('Sign out has succeeded');
  }

}
