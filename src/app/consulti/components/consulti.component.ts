import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ConsultiService } from '../consulti.service';
import { Consulto } from '../model/consulto.model';
import { ConsultoFormComponent } from './consulto-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'consulti',
    templateUrl: './list.html'
  })
export class ConsultiComponent implements OnInit {

  @Input() list: Consulto[];
  @Output() entitySubmitted = new EventEmitter<Consulto>();

  cols: any[];

  title: string = "Consulti";

  editPath: string = "consulti";


  constructor(private consultiSvc: ConsultiService, private modalService: NgbModal) { }

  ngOnInit() {
      // this.consultiSvc.getConsulti(1388).toPromise().then(x => {
      //   x.forEach(c=>c.data = this.momentSvc.toLocalString(c.data));
      //   this.list = x });

      this.cols = [
          { field: 'data', header: 'data' },
          {field: 'problemaIniziale', header: 'problema iniziale' },
      ];
  }

  open(entity: Consulto) {
    console.log(entity);
    const modalRef = this.modalService.open(ConsultoFormComponent);
    modalRef.componentInstance.model = entity;
    modalRef.result.then((data) => {
      this.entitySubmitted.emit(data);
    }, (reason) => {
      // on dismiss
    });
  }  
}