import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './user/auth-guard.service';
import { PazienteFormComponent } from './components/paziente-form.component';
import { PazienteResolver } from './services/paziente-resolver.service';
import { PazientiPage } from './pages/pazienti.page';
import { PazienteFormPage } from './pages/paziente-form.page';

const routes: Routes = [
  { path: '', component: PazientiPage },
  { path: ':pazienteId/edit', component: PazienteFormPage, resolve: { paziente: PazienteResolver } },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [ PazienteResolver ],
    exports: [  ]
})
export class PazientiRoutingModule { }