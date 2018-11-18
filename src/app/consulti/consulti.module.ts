import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ConsultiService } from './consulti.service';
import { PazientiService } from '../pazienti/services/pazienti.service';
import { PazienteContainer, ConsultoContainer } from './containers/index';
import { AnamnesiRemoteComponent, 
  AnamnesiRemotaFormComponent, 
  ConsultoFormComponent, 
  ConsultiComponent, 
  EntityAddComponent, 
  AnamnesiProssimaFormComponent, 
  EsameFormComponent, 
  EsamiComponent, 
  TrattamentiComponent, 
  TrattamentoFormComponent,
  ValutazioniComponent,
  ValutazioneFormComponent } from './components';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material';


@NgModule({
  imports: [ 
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
        path: 'consulti/:consultoId',
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
  entryComponents: [AnamnesiRemotaFormComponent, EsameFormComponent, TrattamentoFormComponent, ValutazioneFormComponent, ConsultoFormComponent],
  declarations: [ 
    ConsultoContainer, PazienteContainer, 
    ConsultoFormComponent, ConsultiComponent, 
    AnamnesiRemoteComponent, AnamnesiRemotaFormComponent, 
    AnamnesiProssimaFormComponent, EsameFormComponent, EsamiComponent, TrattamentiComponent, TrattamentoFormComponent, ValutazioniComponent, ValutazioneFormComponent,
    EntityAddComponent ]
})
export class ConsultiModule { 

  constructor(){
    console.log('ConsultiModule')
  }

}