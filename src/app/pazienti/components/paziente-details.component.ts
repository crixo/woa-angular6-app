import { Component, Input } from '@angular/core';
import { Paziente } from '../model/paziente.model';
import { MomentService } from '../../shared/moment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'paziente-details',
  templateUrl: './paziente-details.component.html'
})
export class PazienteDetailsComponent  {
  @Input() paziente: Paziente = <Paziente>{};

  constructor(
    private router: Router
  ){
    //this.paziente  = new Paziente();
  }

  editPaziente(paziente: Paziente){
    this.router.navigate(['/pazienti',paziente.id, 'edit']);
  }
}