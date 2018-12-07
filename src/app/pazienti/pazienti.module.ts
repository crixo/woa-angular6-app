import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PazientiService } from './services/pazienti.service';
import { PazientiRoutingModule } from './pazienti-routing.module';
import { PazientiContainer } from './containers/pazienti.container';
import { PazienteFormContainer } from './containers/paziente-form.container';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [ 
    //BrowserModule, 
    //HttpClientModule, 
    SharedModule,
    PazientiRoutingModule,
    MatButtonModule
    ],
  exports: [],
  providers: [PazientiService],
  declarations: [ PazienteFormContainer, PazientiContainer ]
})
export class PazientiModule { }