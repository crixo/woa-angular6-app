import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnamnesiRemota } from '../model/anamnesi-remota.model';
import { MomentService } from '../../shared/moment.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnamnesiRemotaFormComponent } from './anamnesi-remota-form.component';
import { Tipo } from '../model/tipo.model';

@Component({
    selector: 'anamnesi-remote',
    templateUrl: '/ngx-datatable.html'
  })
export class AnamnesiRemoteComponent {

  @Input() list: AnamnesiRemota[];
  @Input() tipi: Tipo[];
  @Output() entitySubmitted = new EventEmitter<AnamnesiRemota>();

  columns = [{name:'data'},{name:'descrizione'},{name:'tipo', prop:'tipo.descrizione'}];

  title: string = "Anamnesi Remote";
  editPath: string = "anamnesi-remote";
  editAction="open";
  gridButtonLabel: string = "edit";

  constructor(private momentSvc: MomentService, private modalService: NgbModal) { }

  open(entity: AnamnesiRemota) {
    console.log(this.tipi);
    console.log(entity);
    const modalRef = this.modalService.open(AnamnesiRemotaFormComponent);
    modalRef.componentInstance.model = entity;
    modalRef.componentInstance.tipi = this.tipi;
    modalRef.result.then((data) => {
      console.log(data);
      this.entitySubmitted.emit(data);
    }, (reason) => {
      // on dismiss
    });
  }  
}