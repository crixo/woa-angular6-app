import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Paziente } from '../model/paziente.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PazienteFormComponent } from './paziente-form.component';
import { PazienteFormPage } from '../pages/paziente-form.page';

@Component({
  selector: 'paziente-details',
  templateUrl: './paziente-details.component.html'
})
export class PazienteDetailsComponent  {
  @Input() paziente: Paziente = <Paziente>{};
  @Output() pazienteSubmitted = new EventEmitter<Paziente>();

  constructor(
    private router: Router, private modalService: NgbModal
  ){
    //this.paziente  = new Paziente();
  }

  // editPaziente(paziente: Paziente){
  //   this.router.navigate(['/pazienti',paziente.id, 'edit']);
  // }   

  editPaziente(entity: Paziente) {
    console.log(entity);
    const model = {...entity};
    const modalRef = this.modalService.open(PazienteFormComponent, { size: 'lg' });
    modalRef.componentInstance.model = model;
    modalRef.result.then((data) => {
      console.log(data);
      this.pazienteSubmitted.emit(data);
    }, (reason) => {
      // on dismiss
    });
  } 
}