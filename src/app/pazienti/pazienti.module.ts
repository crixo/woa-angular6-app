import { NgModule } from '@angular/core';


import { SharedModule } from '../shared/shared.module';

import { PazientiService } from './services/pazienti.service';

import { PazientiRoutingModule } from './pazienti-routing.module';
import { PazientiPage } from './pages/pazienti.page';
import { PazienteFormPage } from './pages/paziente-form.page';
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
  declarations: [ PazienteFormPage, PazientiPage ]
})
export class PazientiModule { }