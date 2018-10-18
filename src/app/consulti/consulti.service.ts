import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PazienteFull } from "./model/paziente-full.model";
import { Observable, of } from 'rxjs';
import { PazientiService } from '../pazienti/services/pazienti.service';
import { filter, mapTo, map} from 'rxjs/operators';
import { Consulto } from './model/consulto.model';
import { Tipo } from './model/tipo.model';

@Injectable()
export class ConsultiService {
  constructor(
    private pazientiSvc: PazientiService,
    private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8010/api';

  // getUsers() {
  //   return this.http.get<User[]>(this.baseUrl);
  // }

  getConsultoById(pazienteId:number, id: number): Observable<Consulto> {
    const uri = this.baseUrl + '/pazienti/' + pazienteId;
    console.log(uri);
    return this.http.get<PazienteFull>(uri)
            .pipe(
              map(x=> x.consulti.find(x=>x.id===id))
            );
  }

  getPaziente(pazienteId:number): Observable<PazienteFull> {
    const uri = this.baseUrl + '/pazienti/' + pazienteId;
    console.log(uri);
    return this.http.get<PazienteFull>(uri);
  }

  getConsulti(pazienteId:number): Observable<Consulto[]> {
    const uri = this.baseUrl + '/pazienti/' + pazienteId;
    console.log(uri);
    return this.http.get<PazienteFull>(uri)
            .pipe(
              map(x=> x.consulti)
            );
  }

  getTipiAnamnesiRemota(): Observable<Tipo[]> {
    const uri = this.baseUrl + '/lookups/tipo-anamnesi';
    console.log(uri);
    return this.http.get<Tipo[]>(uri);
  }
}
