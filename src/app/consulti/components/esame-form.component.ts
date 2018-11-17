import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Esame, Tipo } from '../model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ESAME_FORM } from '../ui-form/schemas/esame.form';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './item-form.html'
})
export class EsameFormComponent implements OnInit {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];
  formTitle: string = "Esame";
  useModal: boolean = true;
  @Input() model: Esame;
  @Input() tipi: Tipo[];

  constructor(public activeModal: NgbActiveModal) {

  }

  ngOnInit() {
    console.log(this.tipi);
    this.fields= [
      ...ESAME_FORM(this.tipi).template
    ]; 
  }

  public submit() {
    console.log(this.tipi);
    //this.model.data = this.momentSvc.toApiString(this.model.data);
    console.log(this.model);
    this.activeModal.close(this.model);
  }  
}