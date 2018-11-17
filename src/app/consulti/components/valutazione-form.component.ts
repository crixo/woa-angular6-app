import { Component, OnInit, Input} from '@angular/core';
import { Valutazione } from '../model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { VALUTAZIONE_FORM } from '../ui-form/schemas/valutazione.form';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './item-form.html'
})
export class ValutazioneFormComponent implements OnInit {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];
  formTitle: string = "Valutazione";
  useModal: boolean = true;
  @Input() model: Valutazione;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.fields= [
      ...VALUTAZIONE_FORM().template
    ]; 
  }

  public submit() {
    console.log(this.model);
    this.activeModal.close(this.model);
  }  
}