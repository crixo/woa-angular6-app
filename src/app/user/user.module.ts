import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { UserService } from './user.service';
import { SecurityModule } from '../security/security.module';
import { SharedModule } from '../shared/shared.module';
import { LoginContainer } from './login.container';
import { LogoutContainer } from './logout.container';

@NgModule({
  imports: [
    SharedModule,
    SecurityModule,
    RouterModule.forChild([
      { path: 'login', component: LoginContainer },
      { path: 'logout', component: LogoutContainer }
    ])
  ],
  declarations: [
    LoginComponent, LoginContainer, LogoutContainer
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }