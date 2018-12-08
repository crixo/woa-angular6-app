import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Provincia, Paziente } from '../model/paziente.model';
import { PazienteForm1Component } from './paziente-form1.component';

@Component({
  selector: 'app-modal-paziente-form',
  template: `
<app-modal title="Modifica Paziente">
  <paziente-form1 [province]="province" [useModal]="true" [model]="model" (modelSubmitted)="onModelSubmitted($event)"></paziente-form1>
</app-modal>`
})
export class PazienteForm1ModalComponent extends PazienteForm1Component {


  // @Input() title:string;
  // @Input() province: Provincia[];
  // @Input() model: Paziente = <Paziente>{};
  @Output() modelSubmitted = new EventEmitter<Paziente>();

  // ngOnInit() {
  //   this.title = "Modifica paziente"
  // }

  onModelSubmitted(model: Paziente){
    console.log(this);
    this.modelSubmitted.emit(model);
  }

}
