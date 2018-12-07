import { OnInit, Input, Optional} from '@angular/core';
import { AnamnesiRemota } from '../model/anamnesi-remota.model';
import { ANAMNESI_REMOTA_FORM } from '../ui-form/schemas/anamnesi-remota.form';
import { Tipo } from '../model/tipo.model';
import { EntityFormBaseComponent } from 'src/app/shared/entity-form-base.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export class AnamnesiRemotaFormComponent extends EntityFormBaseComponent<AnamnesiRemota> implements OnInit {
  formTitle: string = "Anamnesi Remota";
  @Input() tipi: Tipo[];

  constructor(@Optional()public activeModal: NgbActiveModal) {
    super(activeModal);
  }    

  ngOnInit() {
    this.fields= [
      ...ANAMNESI_REMOTA_FORM(this.tipi).template
    ]; 
  }
}