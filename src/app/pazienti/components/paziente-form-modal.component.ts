import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Provincia, Paziente } from '../model/paziente.model';
import { PazienteFormComponent } from './paziente-form.component';

@Component({
  selector: 'app-modal-paziente-form',
  template: `
<app-modal title="Modifica Paziente">
  <paziente-form [province]="province" [useModal]="true" [model]="model" (modelSubmitted)="onModelSubmitted($event)"></paziente-form>
</app-modal>`
})
export class PazienteFormModalComponent extends PazienteFormComponent {
  onModelSubmitted(model: Paziente){
    console.log(this);
    this.modelSubmitted.emit(model);
  }
}
