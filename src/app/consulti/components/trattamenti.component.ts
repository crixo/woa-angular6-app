import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Trattamento, Valutazione } from '../model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TrattamentoFormComponent } from './trattamento-form.component';

@Component({
    selector: 'trattamenti',
    //templateUrl: './list.html'
    templateUrl: './ngx-datatable.html'
  })
export class TrattamentiComponent{
  @Input() list: Trattamento[];
  @Output() entitySubmitted = new EventEmitter<Trattamento>();
  columns = [{name:'data'},{name:'descrizione'}];
  title: string = "Trattamenti";
  gridButtonLabel: string = "edit";
  editAction="open";

  constructor(private modalService: NgbModal) { }

  open(entity: Trattamento) {
    console.log(entity);
    const modalRef = this.modalService.open(TrattamentoFormComponent);
    modalRef.componentInstance.model = entity;
    modalRef.result.then((data) => {
      this.entitySubmitted.emit(data);
    }, (reason) => {
      // on dismiss
    });
  }  
}