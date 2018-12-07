import { OnInit, Optional} from '@angular/core';
import { VALUTAZIONE_FORM } from '../ui-form/schemas/valutazione.form';
import { Esame } from '../model';
import { EntityFormBaseComponent } from 'src/app/shared/entity-form-base.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export class ValutazioneFormComponent extends EntityFormBaseComponent<Esame> implements OnInit {
  formTitle: string = "Valutazione";

  constructor(@Optional()public activeModal: NgbActiveModal) {
    super(activeModal);
  }   

  ngOnInit() {
    this.fields= [
      ...VALUTAZIONE_FORM().template
    ]; 
  }
}