import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Consulto } from '../../model/consulto.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditBaseComponent } from 'src/app/shared/components/modal-edit-base-component';
import { ConsultoFormModalComponent } from './consulto-form-modal.component';

@Component({
    selector: 'consulti-compact',
    template: `
<ng-template #popContent>
<table class="table table-hover">
    <thead>
        <tr>
            <td>Data</td>
            <td>Problema Iniziale</td>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let c of list" [ngClass]="{'table-dark' : c.id===selected.id}">
            <td>{{c.data}}</td>
            <td>{{c.problemaIniziale}}</td>
        </tr>
    </tbody>
</table> 
</ng-template>
<button type="button" class="btn btn-outline-secondary" [ngbPopover]="popContent" placement="bottom">
Consulti <span class="badge badge-secondary">{{list.length}}</span>
</button>
    `
  })
export class ConsultiCompactComponent {
  @Input() list: Consulto[];
  @Input() selected: Consulto = <Consulto>{};

  columns = [{prop:'data'},{prop:'problemaIniziale'}];
  title: string = "Consulti";
  editPath: string = "consulti";
  gridButtonLabel: string = "details";
  editAction="details";




}