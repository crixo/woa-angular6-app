import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Esame, Tipo } from '../model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EsameFormComponent } from './esame-form.component';


@Component({
    selector: 'esami',
    templateUrl: './list.html'
  })
export class EsamiComponent implements OnInit {
  @Input() list: Esame[];
  @Input() tipi: Tipo[];
  @Output() entitySubmitted = new EventEmitter<Esame>();
  cols: any[];
  title: string = "Esami";
  editPath: string = "esami";
  gridButtonLabel: string = "edit";

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
      // this.consultiSvc.getConsulti(1388).toPromise().then(x => {
      //   x.forEach(c=>c.data = this.momentSvc.toLocalString(c.data));
      //   this.list = x });

      this.cols = [
          { field: 'data', header: 'data' },
          { field: 'descrizione', header: 'descrizione' },
          { field: 'tipo', subfield:'descrizione', header: 'tipo' },
      ];
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