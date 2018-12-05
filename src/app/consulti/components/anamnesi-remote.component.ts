import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AnamnesiRemota } from '../model/anamnesi-remota.model';
import { MomentService } from '../../shared/moment.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AnamnesiRemotaFormComponent } from './anamnesi-remota-form.component';
import { Tipo } from '../model/tipo.model';
import { Subscription } from 'rxjs';

export class ListComponent<T> implements OnDestroy{

  _entityPersisted: Boolean;
   _modalRef: NgbModalRef;
  @Input() list: T[];
  @Output() entitySubmitted = new EventEmitter<T>();
   _sub: Subscription;
  @Input('entityPersisted') set entityPersisted(value: boolean) {
    this._entityPersisted = value;
    if(value){
      this._modalRef.close();
    }
  }

  editAction="open";
  gridButtonLabel: string = "edit";

  constructor(private modalService: NgbModal) { }

  open_int<T extends object>(entity: T) {
    console.log(entity);
    const model = { ...(entity as object) } as T;
    this._modalRef = this.modalService.open(AnamnesiRemotaFormComponent);
    this._modalRef.componentInstance.model = model;
    this._modalRef.componentInstance.tipi = null;//this.tipi;
    this._sub = this._modalRef.componentInstance.modelSubmitted.subscribe(($e) => {
      const data = $e;
      console.log(data);
      this.entitySubmitted.emit(data);
    })    
  }  
  
  ngOnDestroy(): void {
    if(this._sub)this._sub.unsubscribe();
  }
}

@Component({
  selector: 'anamnesi-remote',
  templateUrl: './ngx-datatable.html'
})
export class AnamnesiRemoteComponent extends ListComponent<AnamnesiRemota> {
  // _entityPersisted: Boolean;
  // _modalRef: NgbModalRef;
  //@Input() list: AnamnesiRemota[];
  @Input() tipi: Tipo[];
  //@Output() entitySubmitted = new EventEmitter<AnamnesiRemota>();
  //_sub: Subscription;
  // @Input('entityPersisted') set entityPersisted(value: boolean) {
  //   this._entityPersisted = value;
  //   if(value){
  //     this._modalRef.close();
  //   }
  // }

  columns = [{name:'data'},{name:'descrizione'},{name:'tipo', prop:'tipo.descrizione'}];

  title: string = "Anamnesi Remote";
  editPath: string = "anamnesi-remote";
  // editAction="open";
  // gridButtonLabel: string = "edit";

  constructor(modalService: NgbModal) {
    super(modalService)
   }

  // open(entity: AnamnesiRemota) {
  //   console.log(this.tipi);
  //   console.log(entity);
  //   const model = {...entity};
  //   this._modalRef = this.modalService.open(AnamnesiRemotaFormComponent);
  //   this._modalRef.componentInstance.model = model;
  //   this._modalRef.componentInstance.tipi = this.tipi;
  //   this._sub = this._modalRef.componentInstance.modelSubmitted.subscribe(($e) => {
  //     const data = $e;
  //     console.log(data);
  //     this.entitySubmitted.emit(data);
  //   })  
  //   // modalRef.result.then((data) => {
  //   //   console.log(data);
  //   //   this.entitySubmitted.emit(data);
  //   // }, (reason) => {
  //   //   // on dismiss
  //   // });
  // }  

  open(entity: AnamnesiRemota) {
    super.open_int(entity);
    this._modalRef.componentInstance.tipi = this.tipi;
  }    
}


