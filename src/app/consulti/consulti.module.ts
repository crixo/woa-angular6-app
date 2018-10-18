import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConsultoFormComponent } from './components/consulto-form.component';
import { SharedModule } from '../shared/shared.module';
import { ConsultiService } from './consulti.service';
import { PazientiService } from '../pazienti/services/pazienti.service';
import { ConsultiComponent } from './components/consulti.component';
import {TableModule} from 'primeng/table';
import { PazientePage } from './pages/paziente.page';
import { AnamnesiRemoteComponent} from './components/anamnesi-remote.component';
import { AnamnesiRemotaFormComponent } from './components/anamnesi-remota-form.component';
import { PazienteResolver } from '../pazienti/services/paziente-resolver.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [ 
    TableModule,
    SharedModule,
    NgbModule,
    RouterModule.forChild([
      {
        path: '',
        component: PazientePage,
        //resolve: { product: PazienteResolver },
        //canDeactivate: [ProductEditGuard],
      },
      {
        path: 'consulti/:id',
        component: ConsultoFormComponent,
        //resolve: { product: ProductResolver },
        //canDeactivate: [ProductEditGuard],
      }
    ])
  ],
  exports: [],
  providers: [
    ConsultiService, 
    PazientiService
  ],
  entryComponents: [AnamnesiRemotaFormComponent],
  declarations: [ ConsultoFormComponent, ConsultiComponent, PazientePage, AnamnesiRemoteComponent, AnamnesiRemotaFormComponent ]
})
export class ConsultiModule { 

  constructor(){
    console.log('ConsultiModule')
  }

}