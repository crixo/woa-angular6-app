import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConsultoFormComponent } from './components/consulto-form.component';
import { SharedModule } from '../shared/shared.module';
import { ConsultiService } from './consulti.service';
import { PazientiService } from '../pazienti/services/pazienti.service';
import { ConsultiComponent } from './components/consulti.component';
import {TableModule} from 'primeng/table';
import { PazienteDetailsComponent} from '../pazienti/components/paziente-details.component';
import { PazientePage } from './pages/paziente.page';

@NgModule({
  imports: [ 
    TableModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PazientePage,
        //resolve: { product: ProductResolver },
        //canDeactivate: [ProductEditGuard],
      },
      {
        path: ':id',
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
  declarations: [ ConsultoFormComponent, ConsultiComponent, PazienteDetailsComponent, PazientePage ]
})
export class ConsultiModule { 

  constructor(){
    console.log('ConsultiModule')
  }

}