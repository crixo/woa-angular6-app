import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ConsultiService } from '../consulti.service';
import { MomentService } from '../../shared/moment.service';
import { AnamnesiRemota, Consulto, Tipo, PazienteFull, EntityType } from '../model/index';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AnamnesiRemoteComponent } from '../components/anamnesi-remote.component';
import { ConsultiComponent } from '../components/consulti.component';
import { AlertService } from 'src/app/messages/alert.service';

@Component({
  templateUrl: 'paziente.container.html'
})

export class PazienteContainer implements OnInit, OnDestroy {
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

        this.subs.push(
          this.consultiSvc.getPaziente(pazienteId).subscribe(data=>{
            this.paziente = data;
            let consulti = data.consulti;
            consulti.forEach(x=>x.data = this.momentSvc.toLocalString(x.data));
            this.consulti = consulti;
      
            let anamnesi = data.anamnesiRemote;
            anamnesi.forEach(x=>x.data = this.momentSvc.toLocalString(x.data));
            this.anamnesiRemote = anamnesi;      
          })      
        );

        this.subs.push(
          this.consultiSvc.getTipiAnamnesiRemota().subscribe(data=>{
            this.tipiAnamnesiRemote = data;
          })
        );
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
    this.onEntitySubmitted(
      entity, 
      [...this.consulti], 
      (dto)=>this.consultiSvc.storeConsulto(dto), 
      (newList) => this.consulti = newList, 
      (dto)=>{return dto;});
  }

  onAnamnesiRemotaSubmitted(entity: AnamnesiRemota){
    this.onEntitySubmitted(
      entity, 
      [...this.anamnesiRemote], 
      (dto)=>this.consultiSvc.storeAnamnesiRemota(dto), 
      (newList) => this.anamnesiRemote = newList, 
      (dto) => { dto.tipo = this.tipiAnamnesiRemote.find(x=>x.id==dto.tipoId); return dto;});
  }

  onEntitySubmitted(entity, currentList, apiCall, callback, toModel){
    let dto = {...entity};
    dto.pazienteId = this.paziente.id;
    dto.data = this.momentSvc.toApiString(dto.data);
    this.subs.push(
      apiCall(dto).subscribe((result) => {
        console.log(result);
        result.data = this.momentSvc.toLocalString(result.data);
        let newList = currentList.filter(x=>x.id !== result.id);
        newList.push(toModel(result));
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

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}