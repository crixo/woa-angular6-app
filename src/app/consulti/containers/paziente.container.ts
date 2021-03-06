import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ConsultiService } from '../consulti.service';
import { MomentService } from '../../services/moment.service';
import { AnamnesiRemota, Consulto, Tipo, PazienteFull, EntityType } from '../model/index';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AnamnesiRemoteComponent } from '../components/anamnesi-remote/anamnesi-remote.component';
import { ConsultiComponent } from '../components/consulti/consulti.component';
import { Paziente, Provincia } from 'src/app/pazienti/model/paziente.model';
import { PazientiService } from 'src/app/pazienti/services/pazienti.service';
import { AlertService } from 'src/app/messages/alert.service';
import { PazienteDetailsComponent } from 'src/app/pazienti/components/paziente-details.component';

@Component({
  templateUrl: 'paziente.container.html'
})

export class PazienteContainer implements OnInit, OnDestroy {
  constructor(private consultiSvc: ConsultiService, 
    private route: ActivatedRoute, 
    private momentSvc: MomentService, 
    private pazientiService: PazientiService,
    private alertService: AlertService,
    ) { }

  paziente: PazienteFull = <PazienteFull>{};
  consulti: Consulto[];
  anamnesiRemote: AnamnesiRemota[];
  province: Provincia[];
  tipiAnamnesiRemote: Tipo[];
  private subs: Subscription[] = new Array<Subscription>();

  @ViewChild(PazienteDetailsComponent)
  private pazienteDetailsComponent: PazienteDetailsComponent;

  @ViewChild(AnamnesiRemoteComponent)
  private anamnesiRemoteComponent: AnamnesiRemoteComponent;

  @ViewChild(ConsultiComponent)
  private consultiComponent: ConsultiComponent;

  entitiesToAdd: EntityType[] = [ {icon: 'C', name:'Consulto'}, {icon: 'AR', name:'AnamnesiRemota'} ];


  ngOnInit() { 

    this.subs.push(
      this.route.paramMap.subscribe(params => {
        const pazienteId = +params.get('pazienteId');
        this.subs.push(
          this.consultiSvc.getPaziente(pazienteId).subscribe(data=>{
            if(data){
              this.paziente = data;
              this.paziente.dataDiNascita = this.momentSvc.toLocalString(this.paziente.dataDiNascita);
              let consulti = data.consulti;
              consulti.forEach(x=>x.data = this.momentSvc.toLocalString(x.data));
              this.consulti = consulti;
        
              let anamnesi = data.anamnesiRemote;
              anamnesi.forEach(x=>x.data = this.momentSvc.toLocalString(x.data));
              this.anamnesiRemote = anamnesi;      
            }
          })      
        );

        this.subs.push(
          this.consultiSvc.getTipiAnamnesiRemota().subscribe(data=>{
            this.tipiAnamnesiRemote = data;
          })
        );

        this.subs.push(
          this.pazientiService.getProvince().subscribe(data=>{
            this.province = data;
          })
        );
      })
    );
  }

  onEntityToAddSelected(entityName: string){
    console.log(entityName);
    const today = this.momentSvc.getToday();
    switch(entityName){
      case 'AnamnesiRemota':
        this.anamnesiRemoteComponent.edit( new AnamnesiRemota(today));
        break;
      case 'Consulto':
        this.consultiComponent.edit( new Consulto(today));
        break;
      default:
        console.log(`no entity found w/ name ${entityName}`);
    }
  }

  onPazienteSubmitted(paziente: Paziente){
    let pazienteDto = { ...paziente }
    pazienteDto.dataDiNascita = this.momentSvc.toApiString(paziente.dataDiNascita);
    this.subs.push(
      this.pazientiService.update(pazienteDto).subscribe((result) => {
        if(result){
          this.pazienteDetailsComponent.entityPersisted = true;
          this.paziente.update(paziente);
          this.alertService.success(`paziente ${result.cognome} salvato con successo`);
        }
      })
    );
  }  

  onConsultoSubmitted(entity: Consulto){
    this.onEntitySubmitted(
      entity,
      [...this.consulti], 
      (dto)=>this.consultiSvc.storeConsulto(dto), 
      (newList) => {this.consulti = newList; this.consultiComponent.entityPersisted=true;}, 
      (dto)=>{return dto;});
  }

  onAnamnesiRemotaSubmitted(entity: AnamnesiRemota){
    this.onEntitySubmitted(
      entity,
      [...this.anamnesiRemote], 
      (dto)=>this.consultiSvc.storeAnamnesiRemota(dto), 
      (newList) => { this.anamnesiRemote = newList; this.anamnesiRemoteComponent.entityPersisted=true;}, 
      (dto) => { dto.tipo = this.tipiAnamnesiRemote.find(x=>x.id==dto.tipoId); return dto;});
  }

  onEntitySubmitted(entity, currentList, apiCall, callback, toModel){
    let dto = {...entity};
    dto.pazienteId = this.paziente.id;
    dto.data = this.momentSvc.toApiString(dto.data);
    this.subs.push(
      apiCall(dto).subscribe((result) => {
        if(result){
          result.data = this.momentSvc.toLocalString(result.data);
          let newList = currentList.filter(x=>x.id !== result.id);
          newList.push(toModel(result));
          newList.sort((a, b) => a.id - b.id);
          callback(newList);
          this.alertService.success(`modifica avvenuta con successo`);
        }
      })
    );
  }  

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}