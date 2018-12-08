import { Component, OnInit, Optional, EventEmitter, Output } from '@angular/core';
import { Consulto } from '../../model/consulto.model';
import { ConsultoFormComponent } from './consulto-form.component';

@Component({
  selector: 'app-modal-consulto-form',
  template: `
<app-modal title="Crea Consulto">
  <consulto-form [useModal]="true" [model]="model" (modelSubmitted)="onModelSubmitted($event)">
  </consulto-form>
</app-modal>`
})
export class ConsultoFormModalComponent extends ConsultoFormComponent {
  onModelSubmitted(model: Consulto){
    console.log(this);
    this.modelSubmitted.emit(model);
  }
}