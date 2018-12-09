import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  imports: [


  ],
  declarations: [

  ],
  providers: [
    // registering providers at this level it creates an instance per module, not per application
  ]
})
export class SecurityModule { 
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SecurityModule,
      providers: [
        AuthService, AuthGuard// it creates an instance per application
      ]
    };
  }
}