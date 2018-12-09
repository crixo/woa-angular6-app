import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Paziente, Provincia } from '../model/paziente.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditBaseComponent } from 'src/app/shared/components/modal-edit-base-component';
import { Router } from '@angular/router';
import { PazienteForm1ModalComponent } from './paziente-form1-modal.component';


@Component({
  selector: 'paziente-details',
  templateUrl: './paziente-details.component.html'
})
export class PazienteDetailsComponent extends ModalEditBaseComponent<Paziente>{
  @Input() province: Provincia[];
  @Input() paziente: Paziente = <Paziente>{};
  @Input() showDetailsLink: Boolean = false;

  constructor(private router: Router, modalService: NgbModal) { 
    super(modalService)
  }

  edit(entity: Paziente) {
    super.edit_int(entity, PazienteForm1ModalComponent, {size: 'lg'});
    this._modalRef.componentInstance.province = this.province;
  }

  goToPazienteDetails(entity: Paziente) {
    this.router.navigate([`/paziente/${entity.id}`]);
  }


}