import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Consulto, Tipo, IEntity, Esame, PazienteFull, AnamnesiRemota, AnamnesiProssima, Trattamento, Valutazione } from './model';
import { EnvService } from '../services/env.service';
import { HttpErrorHandler, HandleError } from '../services/http-error-handler.service';

@Injectable()
export class ConsultiService {
  baseUrl: string;
  private handleError: HandleError;

  constructor(private http: HttpClient, private env: EnvService, httpErrorHandler: HttpErrorHandler) {
    this.baseUrl = this.env.apiBaseUrl + '/api';
    this.handleError = httpErrorHandler.createHandleError('ConsultiService');
  }

  getPaziente(pazienteId: number): Observable<PazienteFull> {
    const uri = this.baseUrl + '/pazienti/' + pazienteId;
    console.log(uri);
    return this.http.get<PazienteFull>(uri)      
      .pipe(
        map(x => Object.assign(new PazienteFull(), x)),
        //tap((entity: Consulto) => console.log(`stored ${segment} item w/ id=${entity.id}`)),
        catchError(this.handleError(`get paziente ${pazienteId}`, null))
      );
  }

  getTipiAnamnesiRemota(): Observable<Tipo[]> {
    const uri = this.baseUrl + '/lookups/tipo-anamnesi';
    console.log(uri);
    return this.http.get<Tipo[]>(uri);
  }

  getTipiEsame(): Observable<Tipo[]> {
    const uri = this.baseUrl + '/lookups/tipo-esami';
    console.log(uri);
    return this.http.get<Tipo[]>(uri);
  }

  storeConsulto(entity: Consulto) {
    return this.store(entity, 'consulti');
  }

  storeAnamnesiRemota(entity: AnamnesiRemota) {
    return this.store(entity, 'anamnesi-remote');
  }

  storeAnamnesiProssima(entity: AnamnesiProssima) {
    return this.store(entity, 'anamnesi-prossime');
  }

  storeEsame(entity: Esame) {
    return this.store(entity, 'esami');
  }

  storeTrattamento(entity: Trattamento) {
    return this.store(entity, 'trattamenti');
  }

  storeValutazione(entity: Valutazione) {
    return this.store(entity, 'valutazioni');
  }

  private store(entity: IEntity, segment: string) {
    console.log(entity)
    console.log(entity.id)
    console.log(`${this.baseUrl}/${segment}`)
    const obs = entity.id > 0 ?
      this.http.put(`${this.baseUrl}/${segment}/${entity.id}`, entity)
      : this.http.post(`${this.baseUrl}/${segment}`, entity);

    return obs
      .pipe(
        tap((entity: Consulto) => console.log(`stored ${segment} item w/ id=${entity.id}`)),
        catchError(this.handleError(`store ${segment} item`, null)));
  }
}
