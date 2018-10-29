import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AnamnesiProssima } from '../model';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ANAMNESI_PROSSIMA_FORM } from '../ui-form/schemas/anamnesi-prossima.form';

@Component({
  selector: 'anamnesi-prossima-form',
  templateUrl: './item-form.html'
})
export class AnamnesiProssimaFormComponent implements OnInit {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];
  formTitle: string = "Anamnesi Prossima";
  @Input() model: AnamnesiProssima;
  @Output() entitySubmitted = new EventEmitter<AnamnesiProssima>();

  constructor() {
  }

  ngOnInit() {
    this.fields= [
      ...ANAMNESI_PROSSIMA_FORM().template
    ]; 
  }

  public submit() {
    //this.model.data = this.momentSvc.toApiString(this.model.data);
    console.log(this.model);
    this.entitySubmitted.emit(this.model);
  }  
}