import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paziente } from "../model/paziente.model";
import { Observable, of } from 'rxjs';
import { map, catchError, tap, delay } from 'rxjs/operators';
import { PagedData } from '../../shared/paged-data';
import { Page } from '../../shared/page';
import { EnvService } from 'src/app/services/env.service';

@Injectable()
export class PazientiService {
  public CurrentPazienteId: number;
  baseUrl: string;
  constructor(private http: HttpClient, private env: EnvService) {
    this.baseUrl = this.env.apiBaseUrl + '/api/pazienti';
  }

  getPazienteById(id: number) {
    const obs = this.http.get<Paziente>(this.baseUrl + '/' + id);
    obs.subscribe(data => {
      console.log(data)
      this.CurrentPazienteId = data.id;
    });
    return obs;
  }

  getProvince(): Observable<any[]> {
    return of([
      { 'sigla': 'TO', 'descrizione': 'Torino' },
    ]);
  }

  /**
  * A method that mocks a paged server response
  * @param page The selected page
  * @returns {any} An observable containing the employee data
  */
  public getPazientiResults(page: Page): Observable<PagedData<Paziente>> {
    const skip = page.pageNumber * page.size;
    const take = page.size;
    let url = `${this.baseUrl}/page/${skip}/${take}`;
    if (page.filter) url += `?filter=${page.filter}`;
    console.log(url);
    return this.http.get<Paziente>(url)
      .pipe(
        //delay(2000),
        map(data => this.getPagedData(page, data)));

    //of(companyData).pipe(map(data => this.getPagedData(page)));
  }

  /**
   * Package companyData into a PagedData object based on the selected Page
   * @param page The page data used to get the selected data from companyData
   * @returns {PagedData<CorporateEmployee>} An array of the selected data and page
   */
  private getPagedData(page: Page, data: any): PagedData<Paziente> {
    console.log(data)
    const pagedData = new PagedData<Paziente>();
    page.totalElements = data.totalRecords;
    page.totalPages = page.totalElements / page.size;
    pagedData.data = data.records;
    pagedData.page = page;
    return pagedData;
  }

  // createUser(user: User) {
  //   return this.http.post(this.baseUrl, user);
  // }

  update(entity: Paziente) {
    console.log(entity)
    const obs = entity.id > 0 ?
      this.http.put(this.baseUrl + '/' + entity.id, entity)
      : this.http.post(this.baseUrl, entity);

    return obs
      .pipe(
        tap((paziente: Paziente) => console.log(`stored paziente w/ id=${paziente.id}`)),
        catchError(this.handleError<any>('store paziente')));
  }

  // deleteUser(id: number) {
  //   return this.http.delete(this.baseUrl + '/' + id);
  // }

  private handleError<T>(operation = 'operation', result?: T) {
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
