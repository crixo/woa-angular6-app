import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PazienteFull } from "./model/paziente-full.model";
import { Observable, of } from 'rxjs';
import { PazientiService } from '../pazienti/services/pazienti.service';
import { map, catchError, tap } from 'rxjs/operators';
import { Consulto } from './model/consulto.model';
import { Tipo } from './model/tipo.model';
import { IEntity } from './model/entity.interface';

@Injectable()
export class ConsultiService {
  constructor(
    private pazientiSvc: PazientiService,
    private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8010/api';

  // getUsers() {
  //   return this.http.get<User[]>(this.baseUrl);
  // }

  // getConsultoById(pazienteId:number, id: number): Observable<Consulto> {
  //   const uri = this.baseUrl + '/pazienti/' + pazienteId;
  //   console.log(uri);
  //   return this.http.get<PazienteFull>(uri)
  //           .pipe(
  //             map(x=> x.consulti.find(x=>x.id===id))
  //           );
  // }

  getPaziente(pazienteId:number): Observable<PazienteFull> {
    const uri = this.baseUrl + '/pazienti/' + pazienteId;
    console.log(uri);
    return this.http.get<PazienteFull>(uri);
  }

  // getConsulti(pazienteId:number): Observable<Consulto[]> {
  //   const uri = this.baseUrl + '/pazienti/' + pazienteId;
  //   console.log(uri);
  //   return this.http.get<PazienteFull>(uri)
  //           .pipe(
  //             map(x=> x.consulti)
  //           );
  // }

  getTipiAnamnesiRemota(): Observable<Tipo[]> {
    const uri = this.baseUrl + '/lookups/tipo-anamnesi';
    console.log(uri);
    return this.http.get<Tipo[]>(uri);
  }

  storeConsulto(entity: Consulto){
    return this.store(entity, 'consulti');
  }  

  private store(entity: IEntity, segment: string){
    console.log(entity)
    console.log(entity.id)
    console.log(`${this.baseUrl}/${segment}`)
    const obs = entity.id > 0 ?
      this.http.put(`${this.baseUrl}/${segment}/${entity.id}`, entity)
      : this.http.post(`${this.baseUrl}/${segment}`, entity);

    return obs
        .pipe(
            tap((entity: Consulto) => console.log(`stored ${segment} item w/ id=${entity.id}`)),
            catchError(this.handleError<any>(`store ${segment} item`)));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
