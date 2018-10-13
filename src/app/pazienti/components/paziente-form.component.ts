import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { PazientiService } from '../services/pazienti.service';
import { PAZIENTE_FORM } from '../ui-form/schemas/paziente.form';

import { Paziente } from '../model/paziente.model';
import { MomentService } from '../../shared/moment.service';
import { Observable, of, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'paziente-form',
  templateUrl: './paziente-form.component.html'
})
export class PazienteFormComponent implements OnInit {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];
  @Input() model: Paziente = <Paziente>{};

  @Input() province: any;
  @Output() modelSubmitted = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.fields= [
      ...PAZIENTE_FORM(this.province).template
    ]; 
  }

  public submit() {
    this.modelSubmitted.emit(this.model);

  }

}