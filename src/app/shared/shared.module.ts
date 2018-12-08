import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFormModule } from '../ui-form/ui-form.module';
import * as moment from 'moment';
import { MomentService } from './moment.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { WoaGridComponent } from './woa-grid/woa-grid.component';
import { PazienteDetailsComponent } from '../pazienti/components/paziente-details.component';
import { PazienteFormComponent } from '../pazienti/components/paziente-form.component';
import { ModalComponent } from './modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PazienteForm1Component } from '../pazienti/components/paziente-form1.component';
import { PazienteForm1ModalComponent } from '../pazienti/components/paziente-form1-modal.component';

@NgModule({
  imports: [ 
    CommonModule, UiFormModule, NgxDatatableModule
     ],
  exports:[ 
    UiFormModule, CommonModule, NgxDatatableModule, 
    WoaGridComponent, 
    PazienteDetailsComponent, 
    PazienteFormComponent, PazienteForm1Component, PazienteForm1ModalComponent,
    ModalComponent
  ],
  declarations: [ WoaGridComponent, 
    PazienteDetailsComponent, 
    PazienteFormComponent, PazienteForm1Component, PazienteForm1ModalComponent,
    ModalComponent ],
  entryComponents: [ ModalComponent, PazienteForm1ModalComponent],
  providers: [
    { provide: 'moment', useFactory: (): any => moment },
    MomentService,
    NgbActiveModal
  ],
  bootstrap:    [  ]
})
export class SharedModule { }
