import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Esame, Tipo } from '../model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EsameFormComponent } from './esame-form.component';


@Component({
    selector: 'esami',
    //templateUrl: './list.html'
    template: `
    <h5>Esami</h5>
    <ngx-datatable
    class="material"
    [rows]="list"
    [columns]="columns"
    [columnMode]="'force'"
    [headerHeight]="50"
    [footerHeight]="20"
    [rowHeight]="'auto'">
    <ngx-datatable-column *ngFor="let col of columns" [name]="col.name" [prop]="col.prop">
    </ngx-datatable-column>
    <ngx-datatable-column [width]="80">
      <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
        <button (click)="open(row)">
            <i class="fas fa-edit"></i>
        </button>
      </ng-template>
    </ngx-datatable-column>
  </ngx-datatable>
    `
  })
export class EsamiComponent implements OnInit {
  //@Input() list: Esame[];
  @Input() list: Esame[];
  @Input() tipi: Tipo[];
  @Output() entitySubmitted = new EventEmitter<Esame>();
  columns = [{name:'data'},{name:'descrizione'},{name:'tipo', prop:'tipo.descrizione'}];
  //cols: any[];
  title: string = "Esami";
  editPath: string = "esami";
  gridButtonLabel: string = "edit";

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

      // this.cols = [
      //     { field: 'data', header: 'data' },
      //     { field: 'descrizione', header: 'descrizione' },
      //     { field: 'tipo', subfield:'descrizione', header: 'tipo' },
      // ];
  }

  open(entity: Esame) {
    console.log(this.tipi);
    console.log(entity);
    const modalRef = this.modalService.open(EsameFormComponent);
    modalRef.componentInstance.model = entity;
    modalRef.componentInstance.tipi = this.tipi;
    modalRef.result.then((data) => {
      this.entitySubmitted.emit(data);
    }, (reason) => {
      // on dismiss
    });
  }  
}