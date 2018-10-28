import { Component, OnInit, Input } from '@angular/core';
import { Esame, Tipo } from '../model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ANAMNESI_REMOTA_FORM } from '../ui-form/schemas/anamnesi-remota.form';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './item-form-popup.html'
})
export class EsameFormComponent implements OnInit {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];
  formTitle: string = "Esame";
  @Input() model: Esame;
  @Input() tipi: Tipo[];

  constructor(public activeModal: NgbActiveModal) {

  }

  ngOnInit() {
    console.log(this.tipi);
    this.fields= [
      ...ANAMNESI_REMOTA_FORM(this.tipi).template
    ]; 
  }

  public submit() {
    console.log(this.tipi);
    //this.model.data = this.momentSvc.toApiString(this.model.data);
    console.log(this.model);
  }  
}