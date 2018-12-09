import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ConsultiService } from '../consulti.service';
import { ActivatedRoute } from '@angular/router';
import { MomentService } from 'src/app/shared/moment.service';
import { AlertService } from 'src/app/messages/alert.service';
import { PazienteFull, Consulto, Esame, EntityType, Tipo, AnamnesiProssima, Trattamento, Valutazione } from '../model';
import { Subscription } from 'rxjs';
import { EsamiComponent, TrattamentiComponent, ValutazioniComponent } from '../components';
import { Paziente, Provincia } from 'src/app/pazienti/model/paziente.model';
import { PazientiService } from 'src/app/pazienti/services/pazienti.service';
import { PazienteDetailsComponent } from 'src/app/pazienti/components/paziente-details.component';

@Component({
  templateUrl: 'consulto.container.html'
})

export class ConsultoContainer implements OnInit, OnDestroy {
  constructor(private consultiSvc: ConsultiService, 
    private route: ActivatedRoute, 
    private momentSvc: MomentService, 
    private pazientiService: PazientiService,
    private alertService: AlertService) { }

  paziente: PazienteFull = <PazienteFull>{};
  consulti: Consulto[] = new Array<Consulto>();
  consulto: Consulto = <Consulto>{};
  tipiEsami: Tipo[];
  province: Provincia[];
  private subs: Subscription[] = new Array<Subscription>();

  entitiesToAdd: EntityType[] = [ 
                  {icon: 'E', name:'Esame'}, 
                  {icon: 'T', name:'Trattamento'}, 
                  {icon: 'V', name:'Valutazione'}  ];

  @ViewChild(EsamiComponent)
  private esamiComponent: EsamiComponent;

  @ViewChild(TrattamentiComponent)
  private trattamentiComponent: TrattamentiComponent;

  @ViewChild(ValutazioniComponent)
  private valutazioniComponent: ValutazioniComponent;

  ngOnInit() { 

    this.subs.push(
      this.route.paramMap.subscribe(params => {
        const pazienteId = +params.get('pazienteId');
        const consultoId = +params.get('consultoId');
        console.log(params);

        this.subs.push(
          this.consultiSvc.getPaziente(pazienteId).subscribe(data=>{
            if(data){
              this.paziente = data;
              this.paziente.dataDiNascita = this.momentSvc.toLocalString(this.paziente.dataDiNascita);

              let consulti = data.consulti;
              //console.log(consulti)
              consulti.forEach(x=>x.data = this.momentSvc.toLocalString(x.data));
              this.consulti = consulti;

              let consulto = data.consulti.find(x=>x.id === consultoId);
              //consulto.data = this.momentSvc.toLocalString(consulto.data);
              
              consulto.esami.forEach(x=>x.data = this.momentSvc.toLocalString(x.data));
              consulto.trattamenti.forEach(x=>x.data = this.momentSvc.toLocalString(x.data));
              
              this.consulto = consulto;
            }
          })
        );
      
        this.subs.push(
          this.consultiSvc.getTipiEsame().subscribe(data=>{
            this.tipiEsami = data;
          })
        );
      })
    );
  }

  onEntityToAddSelected(entityName: string){
    console.log(entityName);
    const today = this.momentSvc.getToday();
    switch(entityName){
      case 'Esame':
        this.esamiComponent.edit( new Esame(today));
        break;
      case 'Trattamento':
        this.trattamentiComponent.edit( new Trattamento(today));
        break;
      case 'Valutazione':
        this.valutazioniComponent.edit( new Valutazione());
        break;
      default:
        console.log(`no entity found w/ name ${entityName}`);
    }
  }

  onConsultoSubmitted(entity: Consulto){
    let dto = {...entity};
    dto.data = this.momentSvc.toApiString(dto.data);
    this.subs.push(
      this.consultiSvc.storeConsulto(dto).subscribe((result) => {
        if(result) this.alertService.success(`modifica avvenuta con successo`);
        //this.onSaveComplete(`paziente ${result.cognome} salvato con successo`);
      })
    );
  }

  onAnamnesiProssimaSubmitted(entity: AnamnesiProssima){
    let dto = {...entity};
    dto.pazienteId = this.paziente.id;
    dto.consultoId = this.consulto.id;
    if(this.consulto.anamnesiProssima) dto.id = this.consulto.id;
    this.subs.push(
      this.consultiSvc.storeAnamnesiProssima(dto).subscribe((result) => {
        if(result) this.alertService.success(`modifica avvenuta con successo`);
        //this.onSaveComplete(`paziente ${result.cognome} salvato con successo`);
      })
    );    
  }

  onEsameSubmitted(entity: Esame){
    this.onEntitySubmitted(
      entity, 
      [...this.consulto.esami], 
      (dto)=>this.consultiSvc.storeEsame(dto), 
      (newList) => { this.consulto.esami = newList; this.esamiComponent.entityPersisted=true;},
      (dto) => { dto.tipo = this.tipiEsami.find(x=>x.id==dto.tipoId); return dto;});
  }

  onTrattamentoSubmitted(entity: Esame){
    this.onEntitySubmitted(
      entity, 
      [...this.consulto.trattamenti], 
      (dto)=>this.consultiSvc.storeTrattamento(dto), 
      (newList) => {this.consulto.trattamenti = newList; this.trattamentiComponent.entityPersisted=true;},
      (dto) => { return dto;});
  }

  onValutazioneSubmitted(entity: Esame){
    this.onEntitySubmitted(
      entity, 
      [...this.consulto.valutazioni], 
      (dto)=>this.consultiSvc.storeValutazione(dto), 
      (newList) => {this.consulto.valutazioni = newList; this.valutazioniComponent.entityPersisted=true;},
      (dto) => { return dto;});
  }  

  onEntitySubmitted(entity, currentList, apiCall, callback, toModel){
    let dto = {...entity};
    dto.pazienteId = this.paziente.id;
    dto.consultoId = this.consulto.id;
    dto.data = this.momentSvc.toApiString(dto.data);
    this.subs.push(
      apiCall(dto).subscribe((result) => {
        if(result){
          console.log(result);
          result.data = this.momentSvc.toLocalString(result.data);
          let newList = currentList.filter(x=>x.id !== result.id);
          newList.push(toModel(result));
          newList.sort((a, b) => a.id - b.id);
          console.log(newList);
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