import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFormModule } from '../ui-form/ui-form.module';
import * as moment from 'moment';
import { MomentService } from './moment.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { WoaGridComponent } from './woa-grid/woa-grid.component';

import { PazienteDetailsComponent } from '../pazienti/components/paziente-details.component';

@NgModule({
  imports: [ 
    CommonModule, UiFormModule, NgxDatatableModule
     ],
  exports:[UiFormModule, CommonModule, NgxDatatableModule, WoaGridComponent, PazienteDetailsComponent],
  declarations: [ WoaGridComponent, PazienteDetailsComponent ],
  providers: [
    { provide: 'moment', useFactory: (): any => moment },
    MomentService
  ],
  bootstrap:    [  ]
})
export class SharedModule { }