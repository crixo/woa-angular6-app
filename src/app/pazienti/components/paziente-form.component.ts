import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { PazientiService } from '../services/pazienti.service';
import { PAZIENTE_FORM } from '../ui-form/schemas/paziente.form';

import { Paziente } from '../model/paziente.model';
import { MomentService } from '../../shared/moment.service';
import { Observable, of, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'paziente-form',
  templateUrl: './paziente-form.component.html'
})
export class PazienteFormComponent implements OnInit {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];  
  formTitle: string = "Paziente";
  useModal: boolean;
  @Input() model: Paziente = <Paziente>{};

  @Input() province: any;
  @Output() modelSubmitted = new EventEmitter();


  constructor(@Optional()public activeModal: NgbActiveModal) { 
    this.useModal = this.activeModal !== null;
  }

  ngOnInit() {
    const panel = this.activeModal? 'panel-popup' : 'panel';
    this.fields= [
      ...PAZIENTE_FORM(panel, this.province).template
    ]; 
  } 

  public submit() {
    console.log(this.model);
    if(this.activeModal)
      this.activeModal.close(this.model);
    else
      this.modelSubmitted.emit(this.model);
  }

}