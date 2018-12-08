import { Component, Input } from '@angular/core';
import { Trattamento } from '../../model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditBaseComponent } from 'src/app/shared/modal-edit-base-component';
import { TrattamentoFormModalComponent } from './trattamento-form-modal.component';

@Component({
    selector: 'trattamenti',
    templateUrl: '../ngx-datatable.html'
  })
export class TrattamentiComponent extends ModalEditBaseComponent<Trattamento>{ 
  @Input() list: Trattamento[];
  columns = [{name:'data'},{name:'descrizione'}];
  title: string = "Trattamenti";
  editPath: string = "trattamenti";

  constructor(modalService: NgbModal) { 
    super(modalService);
  }

  edit(entity: Trattamento){
    super.edit_int(entity, TrattamentoFormModalComponent);
  }
}