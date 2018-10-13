import { NgModule } from '@angular/core';


import { SharedModule } from '../shared/shared.module';

import { PazientiService } from './services/pazienti.service';

import { PazienteFormComponent } from './components/paziente-form.component';
import { PazienteDetailsComponent } from './components/paziente-details.component';
import { PazientiRoutingModule } from './pazienti-routing.module';
import { PazientiPage } from './pages/pazienti.page';
import { PazienteFormPage } from './pages/paziente-form.page';


@NgModule({
  imports: [ 
    //BrowserModule, 
    //HttpClientModule, 
    SharedModule,
    PazientiRoutingModule,
    ],
  exports: [PazienteDetailsComponent],
  providers: [PazientiService],
  declarations: [ PazienteFormPage, PazienteFormComponent, PazienteDetailsComponent, PazientiPage ]
})
export class PazientiModule { }