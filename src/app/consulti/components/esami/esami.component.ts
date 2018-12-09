import { Component, Input } from '@angular/core';
import { Esame, Tipo } from '../../model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditBaseComponent } from 'src/app/shared/components/modal-edit-base-component';
import { EsameFormModalComponent } from './esame-form-modal.component';

@Component({
    selector: 'esami',
    templateUrl: '../ngx-datatable.html'
  })
export class EsamiComponent extends ModalEditBaseComponent<Esame> {
  @Input() list: Esame[];
  @Input() tipi: Tipo[];
  columns = [{name:'data'},{name:'descrizione'},{name:'tipo', prop:'tipo.descrizione'}];
  title: string = "Esami";
  editPath: string = "esami";

  constructor(modalService: NgbModal) { 
    super(modalService);
  }

  edit(entity: Esame){
    super.edit_int(entity, EsameFormModalComponent);
    this._modalRef.componentInstance.tipi = this.tipi;
  }
}