import { Component, Input } from '@angular/core';
import { Valutazione } from '../../model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditBaseComponent } from 'src/app/shared/modal-edit-base-component';
import { ValutazioneFormModalComponent } from './valutazione-form-modal.component';

@Component({
    selector: 'valutazioni',
    templateUrl: '../ngx-datatable.html'
  })
export class ValutazioniComponent extends ModalEditBaseComponent<Valutazione>{
  @Input() list: Valutazione[];
  columns = [{name:'strutturale'},{name:'cranioSacrale'},{name:'akOrtodontica'}];
  title: string = "Valutazioni";
  editPath: string = "valutazioni";

  constructor(modalService: NgbModal) { 
    super(modalService);
  }

  edit(entity: Valutazione){
    super.edit_int(entity, ValutazioneFormModalComponent);
  }
}