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
import { PazienteFormComponent } from '../pazienti/components/paziente-form.component';
import { ConsultoFormModalComponent } from './components/consulti/consulto-form-modal.component';
import { AnamnesiRemotaFormModalComponent } from './components/anamnesi-remote/anamnesi-remota-form-modal.component';
import { EsameFormModalComponent } from './components/esami/esame-form-modal.component';
import { TrattamentoFormModalComponent } from './components/trattamenti/trattamento-form-modal.component';
import { ValutazioneFormModalComponent } from './components/valutazioni/valutazione-form-modal.component';

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
  entryComponents: [
    AnamnesiRemotaFormComponent, AnamnesiRemotaFormModalComponent,
    EsameFormComponent, EsameFormModalComponent,
    TrattamentoFormComponent, TrattamentoFormModalComponent,
    ValutazioneFormComponent, ValutazioneFormModalComponent,
    ConsultoFormComponent, ConsultoFormModalComponent,
    PazienteFormComponent],
  declarations: [ 
    ConsultoContainer, PazienteContainer, 
    ConsultoFormComponent, ConsultiComponent, ConsultoFormModalComponent,
    AnamnesiRemoteComponent, AnamnesiRemotaFormComponent, AnamnesiRemotaFormModalComponent,
    AnamnesiProssimaFormComponent, 
    EsameFormComponent, EsamiComponent, EsameFormModalComponent,
    TrattamentiComponent, TrattamentoFormComponent, TrattamentoFormModalComponent,
    ValutazioniComponent, ValutazioneFormComponent, ValutazioneFormModalComponent,
    EntityAddComponent ]
})
export class ConsultiModule { 

}