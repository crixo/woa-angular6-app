import { Component, Input} from '@angular/core';
import { Paziente } from '../model/paziente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'paziente-info',
  template: `
<h4 style="display: inline">
  <button style="border: 0" (click)="goToPazienteDetails(paziente)">
    <i class="fas fa-chevron-circle-left fa-xs"></i>
  </button>
  <span>{{paziente.nome}} {{paziente.cognome}}</span>
  <span class="paziente-info">{{paziente.dataDiNascita}}</span>
  <span class="paziente-info">{{paziente.professione}}</span>
</h4>
  `
})
export class PazienteInfoComponent {
  @Input() paziente: Paziente = <Paziente>{};

  constructor(private router: Router) { 
  }

  goToPazienteDetails(entity: Paziente) {
    this.router.navigate([`/paziente/${entity.id}`]);
  }
}