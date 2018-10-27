import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnamnesiRemota } from '../model/anamnesi-remota.model';
import { MomentService } from '../../shared/moment.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnamnesiRemotaFormComponent } from './anamnesi-remota-form.component';
import { Tipo } from '../model/tipo.model';

@Component({
    selector: 'anamnesi-remote',
    templateUrl: './list.html'
  })
export class AnamnesiRemoteComponent implements OnInit {

  @Input() list: AnamnesiRemota[];
  @Input() tipi: Tipo[];
  @Output() entitySubmitted = new EventEmitter<AnamnesiRemota>();

  cols: any[];

  title: string = "Anamnesi Remote";
  editPath: string = "anamnesi-remote";


  constructor(private momentSvc: MomentService, private modalService: NgbModal) { }

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

  open(entity: AnamnesiRemota) {
    console.log(this.tipi);
    console.log(entity);
    const modalRef = this.modalService.open(AnamnesiRemotaFormComponent);
    modalRef.componentInstance.model = entity;
    modalRef.componentInstance.tipi = this.tipi;
    modalRef.result.then((data) => {
      this.entitySubmitted.emit(data);
    }, (reason) => {
      // on dismiss
    });
  }  
}