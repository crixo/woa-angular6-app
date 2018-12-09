import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges, SimpleChange } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { PAZIENTE_FORM } from '../ui-form/schemas/paziente.form';
import { Paziente, Provincia } from '../model/paziente.model';

@Component({
  selector: 'paziente-form',
  template:`
  <form [formGroup]="form" (ngSubmit)="submit()">
    <formly-form [model]="model" [fields]="fields" [form]="form"></formly-form>
  </form>  
  `
})
export class PazienteFormComponent implements OnChanges {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];  
  formTitle: string = "Paziente";
  @Input() model: Paziente = <Paziente>{};

  //@Input() province: Provincia[];
  @Output() modelSubmitted = new EventEmitter<Paziente>();

  @Input() useModal:Boolean;

  _province: Provincia[];
  @Input('province') set province(value: Provincia[]) {
    this._province = value;
    this.displayForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    const provs: SimpleChange = changes.province;
    console.log(provs)
    //if(provs.currentValue) this.displayForm();//Not triggered if set through the modalRef.componentInstance
  }

  displayForm(){
    const panel = this.useModal? 'panel-popup' : 'panel';
    this.fields= [
      ...PAZIENTE_FORM(panel, this._province).template
    ]; 
  }

  public submit() {
    this.modelSubmitted.emit(this.model);
  }
}