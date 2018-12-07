import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Consulto } from '../model/consulto.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsultoFormComponent } from './consulto-form.component';
import { ModalEditComponent } from 'src/app/shared/modal-edit-component.base';

@Component({
    selector: 'consulti',
    templateUrl: './ngx-datatable.html'
  })
export class ConsultiComponent extends ModalEditComponent<Consulto>{
  @Input() list: Consulto[];
  @Output() entitySubmitted = new EventEmitter<Consulto>();

  columns = [{name:'data'},{name:'problemaIniziale'}];
  title: string = "Consulti";
  editPath: string = "consulti";
  gridButtonLabel: string = "details";
  editAction="details";

  constructor(private router: Router, modalService: NgbModal) { 
    super(modalService)
  }

  details(entity: Consulto) {
    console.log(entity);
    this.router.navigate(['/','paziente', entity.pazienteId, 'consulti', entity.id]);
  }  

  edit(entity: Consulto) {
    super.edit_int(entity, ConsultoFormComponent);
  }  
}