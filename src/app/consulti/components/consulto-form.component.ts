import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { CONSULTO_FORM } from '../ui-form/schemas/consulto.form';
import { Consulto } from '../model/consulto.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'consulto-form',
  templateUrl: './item-form.html'
})
export class ConsultoFormComponent implements OnInit {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];
  formTitle: string = "Consulto";
  useModal: boolean;
  @Input() model: Consulto;
  @Output() entitySubmitted = new EventEmitter<Consulto>();
  //activeModal?: NgbActiveModal;
  constructor(@Optional()public activeModal: NgbActiveModal) {//
    this.useModal = this.activeModal !== null;
  }

  ngOnInit() {
    const panel = this.activeModal? 'panel-popup' : 'panel';
    console.log(panel);
    this.fields= [
      ...CONSULTO_FORM(panel).template
    ]; 
  }

  public submit() {
    console.log(this.model);
    console.log(this.activeModal);
    if(this.activeModal)
      this.activeModal.close(this.model);
    else
      this.entitySubmitted.emit(this.model);
  }  
}