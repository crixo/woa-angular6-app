import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AuthGuard } from './user/auth-guard.service';
import { SelectiveStrategy } from './services/selective-strategy.service';
import { PazienteFormComponent } from './pazienti/components/paziente-form.component';
import { PazienteResolver } from './pazienti/services/paziente-resolver.service';

import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './user/auth-guard.service';
//import { PageNotFoundComponent } from './page-not-found.component';


const routes: Routes = [
    {
        path: 'pazienti',
        canActivate: [ AuthGuard ],
        data: { preload: false },
        loadChildren: '../app/pazienti/pazienti.module#PazientiModule'
    },
  {
      path: 'paziente/:pazienteId',
      canActivate: [ AuthGuard ],
      data: { preload: false },
      loadChildren: '../app/consulti/consulti.module#ConsultiModule'
  },
  { 
      path: 'welcome',       
      data: { preload: false },
      loadChildren: '../app/welcome/welcome.module#WelcomeModule'
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { 
            preloadingStrategy: SelectiveStrategy, 
            scrollPositionRestoration: 'enabled'}) // , { enableTracing: true })
    ],
    providers: [ SelectiveStrategy,PazienteResolver ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }