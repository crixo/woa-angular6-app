import { Component, Input } from '@angular/core';
import { Trattamento } from '../model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TrattamentoFormComponent } from './trattamento-form.component';
import { ModalEditComponent } from 'src/app/shared/modal-edit-component.base';

@Component({
    selector: 'trattamenti',
    //templateUrl: './list.html'
    templateUrl: './ngx-datatable.html'
  })
export class TrattamentiComponent extends ModalEditComponent<Trattamento>{ 
  @Input() list: Trattamento[];
  columns = [{name:'data'},{name:'descrizione'}];
  title: string = "Trattamenti";
  editPath: string = "trattamenti";

  constructor(modalService: NgbModal) { 
    super(modalService);
  }

  edit(entity: Trattamento){
    super.edit_int(entity, TrattamentoFormComponent);
  }
}