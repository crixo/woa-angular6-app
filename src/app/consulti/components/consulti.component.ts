import { Component, Input} from '@angular/core';
import { ConsultiService } from '../consulti.service';
import { Consulto } from '../model/consulto.model';
import { Router } from '@angular/router';

@Component({
    selector: 'consulti',
    templateUrl: '/ngx-datatable.html'
  })
export class ConsultiComponent{
  @Input() list: Consulto[];

  columns = [{name:'data'},{name:'problemaIniziale'}];
  title: string = "Consulti";
  editPath: string = "consulti";
  gridButtonLabel: string = "details";

  constructor(private consultiSvc: ConsultiService, private router: Router) { }

  open(entity: Consulto) {
    console.log(entity);
    this.router.navigate(['/','paziente', entity.pazienteId, 'consulti', entity.id]);
  }  
}