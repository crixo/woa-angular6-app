import { Component, OnChanges, Input, Output, EventEmitter, Optional, SimpleChanges, SimpleChange } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { PazientiService } from '../services/pazienti.service';
import { PAZIENTE_FORM } from '../ui-form/schemas/paziente.form';

import { Paziente, Provincia } from '../model/paziente.model';
import { MomentService } from '../../shared/moment.service';
import { Observable, of, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'paziente-form',
  templateUrl: './paziente-form.component.html'
})
export class PazienteFormComponent implements OnChanges {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];  
  formTitle: string = "Paziente";
  useModal: boolean;
  @Input() model: Paziente = <Paziente>{};

  //@Input() province: Provincia[];
  @Output() modelSubmitted = new EventEmitter<Paziente>();

  _province: Provincia[];
  @Input('province') set province(value: Provincia[]) {
    this._province = value;
    this.displayForm();
  }


  constructor(@Optional()public activeModal: NgbActiveModal) { 
    this.useModal = this.activeModal !== null;
  }

  ngOnChanges(changes: SimpleChanges) {
    const provs: SimpleChange = changes.province;
    console.log(provs)
    //if(provs.currentValue) this.displayForm();//Not triggered if set through the modalRef.componentInstance
  }

  displayForm(){
    const panel = this.activeModal? 'panel-popup' : 'panel';
    this.fields= [
      ...PAZIENTE_FORM(panel, this._province).template
    ]; 
  }

  public submit() {
    this.modelSubmitted.emit(this.model);
  }

}