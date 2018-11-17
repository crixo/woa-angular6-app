import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Valutazione } from '../model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ValutazioneFormComponent } from './valutazione-form.component';

@Component({
    selector: 'valutazioni',
    //templateUrl: './list.html'
    templateUrl: './ngx-datatable.html'
  })
export class ValutazioniComponent{
  @Input() list: Valutazione[];
  @Output() entitySubmitted = new EventEmitter<Valutazione>();
  columns = [{name:'strutturale'},{name:'cranioSacrale'},{name:'akOrtodontica'}];
  title: string = "Valutazioni";
  gridButtonLabel: string = "edit";
  editAction="open";

  constructor(private modalService: NgbModal) { }

  open(entity: Valutazione) {
    console.log(entity);
    const modalRef = this.modalService.open(ValutazioneFormComponent);
    modalRef.componentInstance.model = entity;
    modalRef.result.then((data) => {
      this.entitySubmitted.emit(data);
    }, (reason) => {
      // on dismiss
    });
  }  
}