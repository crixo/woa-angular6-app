import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { SharedModule } from '../shared/shared.module';
import { LoginContainer } from './login.container';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'login', component: LoginContainer }
    ])
  ],
  declarations: [
    LoginComponent, LoginContainer
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class UserModule { }