import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from './user.model';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';
import { AuthService } from '../security/auth.service';

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

  constructor(private userService: UserService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() { }

  onLogin(credentials: Credentials) {

    this.subs.push(
      this.userService.login(credentials).subscribe((result) => {
        console.log(result);
        if (result) {
          this.authService.setCurrentUser(result.id, result.userName);
          let redirectTo = this.authService.redirectUrl;
          if (redirectTo === undefined) {
            redirectTo = "pazienti";
          }
          this.router.navigate([redirectTo]);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}