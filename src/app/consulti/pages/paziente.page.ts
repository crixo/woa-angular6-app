import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultiService } from '../consulti.service';
import { MomentService } from '../../shared/moment.service';
import { Consulto } from '../model/consulto.model';
import { AnamnesiRemota } from '../model/anamnesi-remota.model';
import { PazienteFull } from '../model/paziente-full.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Tipo } from '../model/tipo.model';
import { AnamnesiRemoteComponent } from '../components/anamnesi-remote.component';
import { EntityAddComponent } from '../components/entity-add.component';
import { EntityType } from '../model/entity-type';
import { ConsultiComponent } from '../components/consulti.component';
import { AlertService } from 'src/app/messages/alert.service';

@Component({
  templateUrl: 'paziente.page.html'
})

export class PazientePage implements OnInit {
  constructor(private consultiSvc: ConsultiService, 
    private route: ActivatedRoute, 
    private momentSvc: MomentService, 
    private alertService: AlertService) { }

  paziente: PazienteFull = <PazienteFull>{};
  consulti: Consulto[];
  anamnesiRemote: AnamnesiRemota[];
  tipiAnamnesiRemote: Tipo[];
  private subs: Subscription[] = new Array<Subscription>();

  @ViewChild(AnamnesiRemoteComponent)
  private anamnesiRemoteComponent: AnamnesiRemoteComponent;

  @ViewChild(ConsultiComponent)
  private consultiComponent: ConsultiComponent;

  entitiesToAdd: EntityType[] = [ {icon: 'C', name:'Consulto'}, {icon: 'AR', name:'AnamnesiRemota'} ];


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

  onEntityToAddSelected(entityName: string){
    console.log(entityName);
    switch(entityName){
      case 'AnamnesiRemota':
        this.anamnesiRemoteComponent.open( new AnamnesiRemota());
        break;
      case 'Consulto':
        this.consultiComponent.open( new Consulto());
        break;
      default:
        console.log(`no entity found w/ name ${entityName}`);
    }
  }

  onConsultoSubmitted(entity: Consulto){
    this.onEntitySubmitted(entity, [...this.consulti], (dto)=>this.consultiSvc.storeConsulto(dto), (newList) => this.consulti = newList);
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