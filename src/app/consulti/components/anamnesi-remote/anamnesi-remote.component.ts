import { Component, Input } from '@angular/core';
import { AnamnesiRemota } from '../../model/anamnesi-remota.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnamnesiRemotaFormComponent } from './anamnesi-remota-form.component';
import { Tipo } from '../../model/tipo.model';
import { ModalEditBaseComponent } from '../../../shared/modal-edit-base-component';
import { AnamnesiRemotaFormModalComponent } from './anamnesi-remota-form-modal.component';

@Component({
  selector: 'anamnesi-remote',
  templateUrl: '../ngx-datatable.html'
})
export class AnamnesiRemoteComponent extends ModalEditBaseComponent<AnamnesiRemota> {
  @Input() tipi: Tipo[];
  @Input() list: AnamnesiRemota[];

  columns = [{name:'data'},{name:'descrizione'},{name:'tipo', prop:'tipo.descrizione'}];
  title: string = "Anamnesi Remote";
  editPath: string = "anamnesi-remote";

  constructor(modalService: NgbModal) {
    super(modalService)
  }

  edit(entity: AnamnesiRemota) {
    super.edit_int(entity, AnamnesiRemotaFormModalComponent);
    this._modalRef.componentInstance.tipi = this.tipi;
  }    
}


