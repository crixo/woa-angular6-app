import { OnInit, Component } from '@angular/core';
import { AnamnesiProssima } from '../../model';
import { ANAMNESI_PROSSIMA_FORM } from '../../ui-form/schemas/anamnesi-prossima.form';
import { EntityFormBaseComponent } from '../../../shared/entity-form-base.component';

@Component({
  selector: 'anamnesi-prossima-form ',
  templateUrl: '../item-form.html'
})
export class AnamnesiProssimaFormComponent extends EntityFormBaseComponent<AnamnesiProssima> implements OnInit {
  formTitle: string = "Anamnesi Prossima";
  
  ngOnInit() {
    this.fields= [
      ...ANAMNESI_PROSSIMA_FORM().template
    ]; 
  }
}