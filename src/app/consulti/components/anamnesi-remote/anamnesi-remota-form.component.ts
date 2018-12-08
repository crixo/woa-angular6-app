import { OnInit, Input, Component} from '@angular/core';
import { AnamnesiRemota } from '../../model/anamnesi-remota.model';
import { ANAMNESI_REMOTA_FORM } from '../../ui-form/schemas/anamnesi-remota.form';
import { Tipo } from '../../model/tipo.model';
import { EntityFormBaseComponent } from 'src/app/shared/entity-form-base.component';

@Component({
  selector: 'anamnesi-remota-form',
  templateUrl: "../item-form.html"
})
export class AnamnesiRemotaFormComponent extends EntityFormBaseComponent<AnamnesiRemota> implements OnInit {
  formTitle: string = "Anamnesi Remota";
  @Input() tipi: Tipo[];


  ngOnInit() {
    this.fields= [
      ...ANAMNESI_REMOTA_FORM(this.tipi).template
    ]; 
  }
}