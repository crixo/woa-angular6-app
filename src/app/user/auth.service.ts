import { Injectable } from '@angular/core';

import { IUser } from './user';
import { MessageService } from '../messages/message.service';
import { AuthResult, Credentials } from './user.model';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../services/env.service';
import { isBuffer } from 'util';

@Injectable()
export class AuthService {
    currentUser: IUser;
    redirectUrl: string;
    baseUrl: string;

    constructor(private http: HttpClient, private env: EnvService) {
        this.baseUrl = this.env.apiBaseUrl + '/api';
      }

    isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    login(credentials: Credentials): Observable<AuthResult> {
        return this.http.post(`${this.baseUrl}/users/authenticate`, credentials)      
        .pipe(
            tap((res: AuthResult) => { 
                console.log(`authentication succeeded for ${credentials.userName}`);  
                this.currentUser = {
                    id: res.id,
                    userName: res.userName,
                    isAdmin: false
                }
            }),
            catchError(this.handleError<any>(`login`))
        );
    }

    logout(): void {
        this.currentUser = null;
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);

          //console.log(error.error.errorMessage)

          throw error.error;// subscriber has to handle the error

          // Let the app keep running by returning an empty result.
          //return of(result as T); // subscriber does not receive any error but result instead
        };
      }    
}
