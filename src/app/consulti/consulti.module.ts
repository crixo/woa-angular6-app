import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ConsultiService } from './consulti.service';
import { PazientiService } from '../pazienti/services/pazienti.service';
import { TableModule } from 'primeng/table';
import { PazienteContainer, ConsultoContainer } from './containers/index';
import { AnamnesiRemoteComponent, AnamnesiRemotaFormComponent, ConsultoFormComponent, ConsultiComponent, EntityAddComponent, AnamnesiProssimaFormComponent, EsameFormComponent, EsamiComponent } from './components';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material';


@NgModule({
  imports: [ 
    TableModule,
    SharedModule,
    NgbModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PazienteContainer,
        //resolve: { product: PazienteResolver },
        //canDeactivate: [ProductEditGuard],
      },
      {
        path: 'consulti/:id',
        component: ConsultoContainer,
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
  entryComponents: [AnamnesiRemotaFormComponent, EsameFormComponent],
  declarations: [ 
    ConsultoContainer, PazienteContainer, 
    ConsultoFormComponent, ConsultiComponent, 
    AnamnesiRemoteComponent, AnamnesiRemotaFormComponent, 
    AnamnesiProssimaFormComponent, EsameFormComponent, EsamiComponent,
    EntityAddComponent ]
})
export class ConsultiModule { 

  constructor(){
    console.log('ConsultiModule')
  }

}