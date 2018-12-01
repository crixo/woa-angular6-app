import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Credentials } from './user.model';
import { Subscription } from 'rxjs';
import { AlertService } from '../messages/alert.service';

@Component({
  template: `
  <div class="container">
    <h3>WOA Authentication</h3>
    <login-form (credentialsSubmitted)="onLogin($event)"></login-form>
  </div>
  `
})

export class LoginContainer implements OnInit, OnDestroy {
  private subs: Subscription[] = new Array<Subscription>();

  constructor(private authService: AuthService,
              private router: Router, private alertService: AlertService) { }

  ngOnInit() { }

  onLogin(credentials: Credentials){

    this.subs.push(
      this.authService.login(credentials).subscribe((result) => {
        console.log(result);
        this.router.navigate(['/pazienti']);
      }, (err) => {
        console.log(err);
        this.alertService.error(err.errorMessage);
      })
    );   
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}