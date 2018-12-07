import { OnInit, Optional} from '@angular/core';
import { Trattamento } from '../model';
import { TRATTAMENTO_FORM } from '../ui-form/schemas/trattamento.form';
import { EntityFormBaseComponent } from 'src/app/shared/entity-form-base.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export class TrattamentoFormComponent extends EntityFormBaseComponent<Trattamento> implements OnInit {
  formTitle: string = "Trattamento";

  constructor(@Optional()public activeModal: NgbActiveModal) {
    super(activeModal);
  }     

  ngOnInit() {
    this.fields= [
      ...TRATTAMENTO_FORM().template
    ]; 
  }
}