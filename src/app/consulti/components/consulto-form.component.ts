import { Component, OnInit, Optional } from '@angular/core';
import { CONSULTO_FORM } from '../ui-form/schemas/consulto.form';
import { Consulto } from '../model/consulto.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EntityFormBaseComponent } from 'src/app/shared/entity-form-base.component';

@Component({
  selector: 'consulto-form ',
  templateUrl: './item-form.html'
})
export class ConsultoFormComponent extends EntityFormBaseComponent<Consulto> implements OnInit {
  formTitle: string = "Consulto";

  constructor(@Optional()public activeModal: NgbActiveModal) {
    super(activeModal);
    console.log(this.activeModal);
  }

  ngOnInit() {
    const panel = this.activeModal? 'panel-popup' : 'panel';
    console.log(panel);
    this.fields= [
      ...CONSULTO_FORM(panel).template
    ]; 
  }
}