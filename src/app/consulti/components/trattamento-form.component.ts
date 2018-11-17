import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trattamento } from '../model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TRATTAMENTO_FORM } from '../ui-form/schemas/trattamento.form';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './item-form.html'
})
export class TrattamentoFormComponent implements OnInit {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];
  formTitle: string = "Trattamento";
  useModal: boolean = true;
  @Input() model: Trattamento;

  constructor(public activeModal: NgbActiveModal) {

  }

  ngOnInit() {
    this.fields= [
      ...TRATTAMENTO_FORM().template
    ]; 
  }

  public submit() {
    //this.model.data = this.momentSvc.toApiString(this.model.data);
    console.log(this.model);
    this.activeModal.close(this.model);
  }  
}