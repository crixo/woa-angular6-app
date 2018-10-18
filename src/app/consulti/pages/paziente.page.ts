import { Component, OnInit } from '@angular/core';
import { ConsultiService } from '../consulti.service';
import { MomentService } from '../../shared/moment.service';
import { Consulto } from '../model/consulto.model';
import { AnamnesiRemota } from '../model/anamnesi-remota.model';
import { PazienteFull } from '../model/paziente-full.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Tipo } from '../model/tipo.model';

@Component({
  templateUrl: 'paziente.page.html'
})

export class PazientePage implements OnInit {
  constructor(private consultiSvc: ConsultiService, private route: ActivatedRoute, private momentSvc: MomentService) { }
  paziente: PazienteFull = <PazienteFull>{};;
  consulti: Consulto[];
  anamnesiRemote: AnamnesiRemota[];
  tipiAnamnesiRemote: Tipo[];
  private subs: Subscription[] = new Array<Subscription>();

  ngOnInit() { 
    this.subs.push(
      this.route.paramMap.subscribe(params => {
        const pazienteId = +params.get('pazienteId');
        console.log(params);
        this.consultiSvc.getPaziente(pazienteId).subscribe(data=>{
          this.paziente = data;
          let consulti = data.consulti;
          consulti.forEach(x=>x.data = this.momentSvc.toLocalString(x.data));
          this.consulti = consulti;
    
          let anamnesi = data.anamnesiRemote;
          anamnesi.forEach(x=>x.data = this.momentSvc.toLocalString(x.data));
          this.anamnesiRemote = anamnesi;      
        });

        this.consultiSvc.getTipiAnamnesiRemota().subscribe(data=>{
          this.tipiAnamnesiRemote = data;
        });
      })
    );



  }
}