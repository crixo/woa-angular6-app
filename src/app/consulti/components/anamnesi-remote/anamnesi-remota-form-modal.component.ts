import { Component, OnInit, Optional, EventEmitter, Output, Input } from '@angular/core';
import { AnamnesiRemotaFormComponent } from './anamnesi-remota-form.component';
import { AnamnesiRemota } from '../../model';

@Component({
  selector: 'app-modal-anamnesi-remota-form',
  template: `
<app-modal title="{{formTitle}}">
  <anamnesi-remota-form [useModal]="true" [model]="model" [tipi]="tipi" (modelSubmitted)="onModelSubmitted($event)">
  </anamnesi-remota-form>
</app-modal>`
})
export class AnamnesiRemotaFormModalComponent extends AnamnesiRemotaFormComponent {
  onModelSubmitted(model: AnamnesiRemota){
    console.log(this);
    this.modelSubmitted.emit(model);
  }
}