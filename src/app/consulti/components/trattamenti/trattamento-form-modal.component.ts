import { Component, EventEmitter, Output } from '@angular/core';
import { TrattamentoFormComponent } from './trattamento-form.component';
import { Trattamento } from '../../model';

@Component({
  selector: 'app-modal-trattamento-form',
  template: `
<app-modal title="{{formTitle}}">
  <trattamento-form [useModal]="true" [model]="model" (modelSubmitted)="onModelSubmitted($event)">
  </trattamento-form>
</app-modal>`
})
export class TrattamentoFormModalComponent extends TrattamentoFormComponent {
  onModelSubmitted(model: Trattamento){
    console.log(this);
    this.modelSubmitted.emit(model);
  }
}