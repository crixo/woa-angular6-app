import { OnInit, Component} from '@angular/core';
import { VALUTAZIONE_FORM } from '../../ui-form/schemas/valutazione.form';
import { Valutazione } from '../../model';
import { EntityFormBaseComponent } from 'src/app/shared/components/entity-form-base.component';

@Component({
  selector: 'valutazione-form',
  templateUrl: "../item-form.html"
})
export class ValutazioneFormComponent extends EntityFormBaseComponent<Valutazione> implements OnInit {
  formTitle: string = "Valutazione";

  ngOnInit() {
    this.fields= [
      ...VALUTAZIONE_FORM().template
    ]; 
  }
}