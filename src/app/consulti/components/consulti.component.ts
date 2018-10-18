import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ConsultiService } from '../consulti.service';
import { Consulto } from '../model/consulto.model';
import { MomentService } from '../../shared/moment.service';


@Component({
    selector: 'consulti',
    templateUrl: './list.html'
  })
export class ConsultiComponent implements OnInit {

  @Input() list: Consulto[];

  cols: any[];

  title: string = "Consulti";

  editPath: string = "consulti";


  constructor(private consultiSvc: ConsultiService, private momentSvc: MomentService) { }

  ngOnInit() {
      // this.consultiSvc.getConsulti(1388).toPromise().then(x => {
      //   x.forEach(c=>c.data = this.momentSvc.toLocalString(c.data));
      //   this.list = x });

      this.cols = [
          { field: 'data', header: 'data' },
          {field: 'problemaIniziale', header: 'problema iniziale' },
      ];
  }
}