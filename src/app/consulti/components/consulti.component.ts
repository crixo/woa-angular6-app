import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ConsultiService } from '../consulti.service';
import { Consulto } from '../model/consulto.model';
import { ConsultoFormComponent } from './consulto-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


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

  gridButtonLabel: string = "details";


  constructor(private consultiSvc: ConsultiService, private router: Router) { }

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
    this.router.navigate(['/','paziente', entity.pazienteId,'consulti', entity.id]);
  }  
}