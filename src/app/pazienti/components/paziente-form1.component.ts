import { Component, OnChanges, Input, Output, EventEmitter, Optional, SimpleChanges, SimpleChange } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { PazientiService } from '../services/pazienti.service';
import { PAZIENTE_FORM } from '../ui-form/schemas/paziente.form';

import { Paziente, Provincia } from '../model/paziente.model';
import { MomentService } from '../../shared/services/moment.service';
import { Observable, of, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'paziente-form1',
  template:`
  <form [formGroup]="form" (ngSubmit)="submit()">
    <formly-form [model]="model" [fields]="fields" [form]="form"></formly-form>
  </form>  
  `
})
export class PazienteForm1Component implements OnChanges {
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