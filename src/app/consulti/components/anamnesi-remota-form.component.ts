import { Component, OnInit, Input } from '@angular/core';
import { AnamnesiRemota } from '../model/anamnesi-remota.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ANAMNESI_REMOTA_FORM } from '../ui-form/schemas/anamnesi-remota.form';
import { Tipo } from '../model/tipo.model';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './item-form-popup.html'
})
export class AnamnesiRemotaFormComponent implements OnInit {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];
  formTitle: string = "Anamnesi Remota";
  @Input() model: AnamnesiRemota;
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