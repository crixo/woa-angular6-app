import { Component, OnInit, Input, Optional } from '@angular/core';
import { Esame, Tipo } from '../../model';
import { ESAME_FORM } from '../../ui-form/schemas/esame.form';
import { EntityFormBaseComponent } from 'src/app/shared/entity-form-base.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'esame-form',
  templateUrl: "../item-form.html"
})
export class EsameFormComponent extends EntityFormBaseComponent<Esame> implements OnInit {
  formTitle: string = "Esame";
  @Input() tipi: Tipo[];

  ngOnInit() {
    this.fields= [
      ...ESAME_FORM(this.tipi).template
    ]; 
  }
}