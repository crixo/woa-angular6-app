import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  template: `
  <div class="container">
    <h3>WOA Authentication</h3>
    <button type="button" class="btn btn-secondary" (click)="logout()">Confirm Logout</button>
  </div>
  `
})

export class LogoutContainer implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() { 
    this.logout();
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl('/welcome');
  }
}