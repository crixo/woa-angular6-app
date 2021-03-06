import { Component, OnInit } from '@angular/core';
import { CONSULTO_FORM } from '../../ui-form/schemas/consulto.form';
import { Consulto } from '../../model/consulto.model';
import { EntityFormBaseComponent } from 'src/app/shared/components/entity-form-base.component';

@Component({
  selector: 'consulto-form',
  templateUrl: "../item-form.html"
})
export class ConsultoFormComponent extends EntityFormBaseComponent<Consulto> implements OnInit {
  formTitle: string = "Consulto";

  ngOnInit() {
    const panel = this.useModal? 'panel-popup' : 'panel';
    console.log(panel);
    this.fields= [
      ...CONSULTO_FORM(panel).template
    ]; 
  }
}