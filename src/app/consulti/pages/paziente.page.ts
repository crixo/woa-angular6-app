import { Component, OnInit } from '@angular/core';
import { ConsultiService } from '../consulti.service';
import { MomentService } from '../../shared/moment.service';
import { Consulto } from '../model/consulto.model';
import { PazienteFull } from '../model/paziente-full.model';

@Component({
  templateUrl: 'paziente.page.html'
})

export class PazientePage implements OnInit {
  constructor(private consultiSvc: ConsultiService, private momentSvc: MomentService) { }
  paziente: PazienteFull = <PazienteFull>{};;
  consulti: Consulto[];

  ngOnInit() { 
    this.consultiSvc.getPaziente(1388).subscribe(data=>{
      this.paziente = data;
      let x = data.consulti;
      x.forEach(c=>c.data = this.momentSvc.toLocalString(c.data));
      this.consulti = x;
    });
  }
}