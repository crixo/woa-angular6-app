import { Component, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Paziente } from '../model/paziente.model';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PazienteFormComponent } from './paziente-form.component';
import { PazienteFormPage } from '../pages/paziente-form.page';
import { Subscription } from 'rxjs';

@Component({
  selector: 'paziente-details',
  templateUrl: './paziente-details.component.html'
})
export class PazienteDetailsComponent implements OnDestroy  {

  _pazientePersisted
  _modalRef: NgbModalRef;
  private subs: Subscription[] = new Array<Subscription>();
  @Input() paziente: Paziente = <Paziente>{};
  //@Input() pazientePersisted: Boolean;
  @Input('pazientePersisted') set pazientePersisted(value: boolean) {
    this._pazientePersisted = value;
    if(value){
      this._modalRef.close();
    }
  }
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
    this._modalRef = this.modalService.open(PazienteFormComponent, { size: 'lg' });
    this._modalRef.componentInstance.model = model;
    this.subs.push(this._modalRef.componentInstance.modelSubmitted.subscribe(($e) => {
      const data = $e;
      console.log(data);
      this.pazienteSubmitted.emit(data);
    })  
    // this._modalRef.result.then((data) => {
    //   console.log(data);
    //   this.pazienteSubmitted.emit(data);
    // }, (reason) => {
    //   // on dismiss
    // });
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }  
}