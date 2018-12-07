import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PazienteResolver } from './services/paziente-resolver.service';
import { PazientiContainer } from './containers/pazienti.container';
import { PazienteFormContainer } from './containers/paziente-form.container';

const routes: Routes = [
  { path: '', component: PazientiContainer },
  //{ path: ':pazienteId/edit', component: PazienteFormContainer, resolve: { paziente: PazienteResolver } },
  { path: 'add', component: PazienteFormContainer },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [ PazienteResolver ],
    exports: [ RouterModule ]
})
export class PazientiRoutingModule { }