import { Component, EventEmitter, Output } from '@angular/core';
import { Esame } from '../../model';
import { EsameFormComponent } from './esame-form.component';

@Component({
  selector: 'app-modal-esame-form',
  template: `
<app-modal title="{{formTitle}}">
  <esame-form [useModal]="true" [model]="model" [tipi]="tipi" (modelSubmitted)="onModelSubmitted($event)">
  </esame-form>
</app-modal>`
})
export class EsameFormModalComponent extends EsameFormComponent {
  onModelSubmitted(model: Esame){
    console.log(this);
    this.modelSubmitted.emit(model);
  }
}