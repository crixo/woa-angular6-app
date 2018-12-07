import { Component, Input } from '@angular/core';
import { Paziente } from '../model/paziente.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PazienteFormComponent } from './paziente-form.component';

import { ModalEditComponent } from 'src/app/shared/modal-edit-component.base';
import { Router } from '@angular/router';

@Component({
  selector: 'paziente-details',
  templateUrl: './paziente-details.component.html'
})
export class PazienteDetailsComponent extends ModalEditComponent<Paziente>  {

  @Input() paziente: Paziente = <Paziente>{};
  @Input() showDetailsLink: Boolean = false;

  constructor(modalService: NgbModal, private router: Router) {
    super(modalService)
  }

  edit(entity: Paziente) {
    //this._modalRef = this.modalService.open(PazienteFormComponent, { size: 'lg' });
    
    super.edit_int(entity, PazienteFormComponent, {size: 'lg'});
  }

  goToPazienteDetails(entity: Paziente) {
    this.router.navigate([`/paziente/${entity.id}`]);
  }
}