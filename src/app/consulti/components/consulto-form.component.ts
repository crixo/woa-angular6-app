import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CONSULTO_FORM } from '../ui-form/schemas/consulto.form';
import { Consulto } from '../model/consulto.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'consulto-form',
  templateUrl: './item-form-popup.html'
})
export class ConsultoFormComponent implements OnInit {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];
  formTitle: string = "Consulto";
  @Input() model: Consulto;

  constructor(public activeModal: NgbActiveModal) {

  }

  ngOnInit() {
    this.fields= [
      ...CONSULTO_FORM().template
    ]; 
  }

  public submit() {
    console.log(this.model);
    this.activeModal.close(this.model);
  }  
}