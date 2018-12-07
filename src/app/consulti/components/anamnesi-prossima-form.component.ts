import { OnInit, Component, Optional } from '@angular/core';
import { AnamnesiProssima } from '../model';

import { ANAMNESI_PROSSIMA_FORM } from '../ui-form/schemas/anamnesi-prossima.form';
import { EntityFormBaseComponent } from 'src/app/shared/entity-form-base.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'anamnesi-prossima-form ',
  templateUrl: './item-form.html'
})
export class AnamnesiProssimaFormComponent extends EntityFormBaseComponent<AnamnesiProssima> implements OnInit {
  formTitle: string = "Anamnesi Prossima";

  constructor(@Optional()public activeModal: NgbActiveModal) {
    super(activeModal);
  }  

  ngOnInit() {
    this.fields= [
      ...ANAMNESI_PROSSIMA_FORM().template
    ]; 
  }
}