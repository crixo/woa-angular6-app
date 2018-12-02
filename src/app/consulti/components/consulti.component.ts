import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConsultiService } from '../consulti.service';
import { Consulto } from '../model/consulto.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsultoFormComponent } from './consulto-form.component';

@Component({
    selector: 'consulti',
    templateUrl: './ngx-datatable.html'
  })
export class ConsultiComponent{
  @Input() list: Consulto[];
  @Output() entitySubmitted = new EventEmitter<Consulto>();

  columns = [{name:'data'},{name:'problemaIniziale'}];
  title: string = "Consulti";
  editPath: string = "consulti";
  gridButtonLabel: string = "details";
  editAction="details";

  constructor(private consultiSvc: ConsultiService, private router: Router, private modalService: NgbModal) { }

  details(entity: Consulto) {
    console.log(entity);
    this.router.navigate(['/','paziente', entity.pazienteId, 'consulti', entity.id]);
  }  

  open(entity: Consulto) {
    console.log(entity);
    const model = {...entity};
    const modalRef = this.modalService.open(ConsultoFormComponent);
    modalRef.componentInstance.model = model;
    modalRef.result.then((data) => {
      console.log(data);
      this.entitySubmitted.emit(data);
    }, (reason) => {
      // on dismiss
    });
  }    
}