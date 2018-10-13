import { Component, Input } from '@angular/core';
import { Paziente } from '../model/paziente.model';
import { MomentService } from '../../shared/moment.service';

@Component({
  selector: 'paziente-details',
  templateUrl: './paziente-details.component.html'
})
export class PazienteDetailsComponent  {
  @Input() paziente: Paziente = <Paziente>{};

  constructor(
    private momentSvc: MomentService
  ){
    //this.paziente  = new Paziente();
  }
}