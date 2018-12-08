import { Component, EventEmitter, Output } from '@angular/core';
import { ValutazioneFormComponent } from './valutazione-form.component';
import { Valutazione } from '../../model';

@Component({
  selector: 'app-modal-valutazione-form',
  template: `
<app-modal title="{{formTitle}}">
  <valutazione-form [useModal]="true" [model]="model" (modelSubmitted)="onModelSubmitted($event)">
  </valutazione-form>
</app-modal>`
})
export class ValutazioneFormModalComponent extends ValutazioneFormComponent {
  onModelSubmitted(model: Valutazione){
    console.log(this);
    this.modelSubmitted.emit(model);
  }
}