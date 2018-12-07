import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Esame, Tipo } from '../model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EsameFormComponent } from './esame-form.component';
import { ModalEditComponent } from 'src/app/shared/modal-edit-component.base';

@Component({
    selector: 'esami',
    templateUrl: './ngx-datatable.html'
  })
export class EsamiComponent extends ModalEditComponent<Esame> {
  @Input() list: Esame[];
  @Input() tipi: Tipo[];
  columns = [{name:'data'},{name:'descrizione'},{name:'tipo', prop:'tipo.descrizione'}];
  title: string = "Esami";
  editPath: string = "esami";

  constructor(modalService: NgbModal) { 
    super(modalService);
  }

  edit(entity: Esame){
    super.edit_int(entity, EsameFormComponent);
    this._modalRef.componentInstance.tipi = this.tipi;
  }
}