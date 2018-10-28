import { Component, OnInit } from '@angular/core';
import { ConsultiService } from '../consulti.service';
import { ActivatedRoute } from '@angular/router';
import { MomentService } from 'src/app/shared/moment.service';
import { AlertService } from 'src/app/messages/alert.service';
import { PazienteFull, Consulto, Esame } from '../model';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: 'consulto.container.html'
})

export class ConsultoContainer implements OnInit {
  constructor(private consultiSvc: ConsultiService, 
    private route: ActivatedRoute, 
    private momentSvc: MomentService, 
    private alertService: AlertService) { }

  paziente: PazienteFull = <PazienteFull>{};
  consulto: Consulto = <Consulto>{};
  private subs: Subscription[] = new Array<Subscription>();

  ngOnInit() { 

    this.subs.push(
      this.route.paramMap.subscribe(params => {
        const pazienteId = +params.get('pazienteId');
        const consultoId = +params.get('id');
        console.log(params);
        this.consultiSvc.getPaziente(pazienteId).subscribe(data=>{
          this.paziente = data;
          let consulto = data.consulti.find(x=>x.id === consultoId);
          consulto.data = this.momentSvc.toLocalString(consulto.data);
          
          consulto.esami.forEach(x=>x.data = this.momentSvc.toLocalString(x.data));
          
          this.consulto = consulto;
        });

        // this.consultiSvc.getTipiAnamnesiRemota().subscribe(data=>{
        //   this.tipiAnamnesiRemote = data;
        // });
      })
    );
  }

  onEntityToAddSelected(entityName: string){
    console.log(entityName);
    switch(entityName){
      // case 'AnamnesiRemota':
      //   this.anamnesiRemoteComponent.open( new AnamnesiRemota());
      //   break;
      // case 'Consulto':
      //   this.consultiComponent.open( new Consulto());
      //   break;
      default:
        console.log(`no entity found w/ name ${entityName}`);
    }
  }

  onEsameSubmitted(entity: Esame){
    this.onEntitySubmitted(entity, [...this.consulto.esami], (dto)=>this.consultiSvc.storeEsame(dto), (newList) => this.consulto.esami = newList);
  }

  onEntitySubmitted(entity, currentList, apiCall, callback){
    let dto = {...entity};
    dto.pazienteId = this.paziente.id;
    dto.data = this.momentSvc.toApiString(dto.data);
    this.subs.push(
      apiCall(dto).subscribe((result) => {
        console.log(result);
        result.data = this.momentSvc.toLocalString(result.data);
        let newList = currentList.filter(x=>x.id !== result.id);
        newList.push(result);
        newList.sort((a, b) => a.id - b.id);
        console.log(newList);
        callback(newList);
        //this.onSaveComplete(`paziente ${result.cognome} salvato con successo`);
      }, (err) => {
        console.log(err);
        this.alertService.error(err);
      })
    );
  }  
}