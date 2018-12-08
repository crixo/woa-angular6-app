import { OnInit, Component} from '@angular/core';
import { Trattamento } from '../../model';
import { TRATTAMENTO_FORM } from '../../ui-form/schemas/trattamento.form';
import { EntityFormBaseComponent } from 'src/app/shared/entity-form-base.component';

@Component({
  selector: 'trattamento-form',
  templateUrl: "../item-form.html"
})
export class TrattamentoFormComponent extends EntityFormBaseComponent<Trattamento> implements OnInit {
  formTitle: string = "Trattamento";
   
  ngOnInit() {
    this.fields= [
      ...TRATTAMENTO_FORM().template
    ]; 
  }
}