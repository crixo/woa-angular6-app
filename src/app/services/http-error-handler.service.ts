import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { AlertService } from '../messages/alert.service';

export type HandleError = <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandler {

  constructor(private alertSvc: AlertService) { }

  /** Create handleError function that already knows the service name */
  createHandleError = (serviceName = '') => <T>
    (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);

  /**
   * @param serviceName: name of the data service
   * @param operation: name of the failed operation
   * @param result: optional value to return as the observable result
   */
  handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      // Todo -> Send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // const message = (error.error instanceof ErrorEvent) ?
      //   error.error.message :
      //  `{error code: ${error.status}, body: "${error.message}"}`;

      // Todo -> Transforming error for user consumption
      //this.errorService.errorMessage = `${serviceName} -> ${operation} failed.\n  Message: ${message}`;

      const message = (error.error.errorMessage) ?
        error.error.errorMessage :
        `an error occurred on ${serviceName} -> ${operation} -> ${error.message}`;

      this.alertSvc.error(message);

      // -> Return a safe result.
      return of( result );
    };
  }
}