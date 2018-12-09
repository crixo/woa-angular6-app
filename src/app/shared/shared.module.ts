import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFormModule } from '../ui-form/ui-form.module';
import * as moment from 'moment';
import { MomentService } from './services/moment.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { WoaGridComponent } from './components/woa-grid/woa-grid.component';
import { PazienteDetailsComponent } from '../pazienti/components/paziente-details.component';
import { ModalComponent } from './components/modal.component';
import { NgbActiveModal, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { PazienteFormComponent } from '../pazienti/components/paziente-form.component';
import { PazienteFormModalComponent } from '../pazienti/components/paziente-form-modal.component';
import { PazienteInfoComponent } from '../pazienti/components/paziente-info.component';

@NgModule({
  imports: [ 
    CommonModule, UiFormModule, NgxDatatableModule, NgbPopoverModule
     ],
  exports:[ 
    UiFormModule, CommonModule, NgxDatatableModule, 
    WoaGridComponent, 
    PazienteDetailsComponent, PazienteInfoComponent,
    PazienteFormComponent, PazienteFormModalComponent,
    ModalComponent
  ],
  declarations: [ WoaGridComponent, 
    PazienteDetailsComponent, PazienteInfoComponent,
    PazienteFormComponent, PazienteFormModalComponent,
    ModalComponent ],
  entryComponents: [ ModalComponent, PazienteFormModalComponent],
  providers: [
    { provide: 'moment', useFactory: (): any => moment },
    MomentService,
    NgbActiveModal
  ],
  bootstrap:    [  ]
})
export class SharedModule { }
