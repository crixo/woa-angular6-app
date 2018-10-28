import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { CONSULTO_FORM } from '../ui-form/schemas/consulto.form';
import { Consulto } from '../model/consulto.model';

@Component({
  selector: 'consulto-form',
  templateUrl: './item-form.html'
})
export class ConsultoFormComponent implements OnInit {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];
  formTitle: string = "Consulto";
  @Input() model: Consulto;

  constructor() {

  }

  ngOnInit() {
    this.fields= [
      ...CONSULTO_FORM().template
    ]; 
  }

  public submit() {
    console.log(this.model);
  }  
}