import { Injectable } from '@angular/core';
import { IUser } from './user';
import { AuthResult, Credentials } from './user.model';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../services/env.service';
import { LocalStorageService } from '../services/local-storage.service';
import { MomentService } from '../shared/moment.service';

const USER_STORAGE_KEY: string = "USER_STORAGE_KEY";
const USER_STORAGE_EXPIRE_KEY: string = "USER_STORAGE_EXPIRE_KEY";

@Injectable()
export class AuthService {
    currentUser: IUser;
    redirectUrl: string;
    baseUrl: string;

    constructor(private http: HttpClient, private env: EnvService, private localeStorageSvc: LocalStorageService, private momentSvc: MomentService) {
        this.baseUrl = this.env.apiBaseUrl + '/api';
        const expirationDate = this.localeStorageSvc.get(USER_STORAGE_EXPIRE_KEY);
        console.log(`user auth expiration date: ${expirationDate}`);
        if(expirationDate && this.momentSvc.isUserAuthExpired(expirationDate)){
            console.log(`user authentication expired at ${expirationDate}`); 
            this.logout();
        }
        this.currentUser =  this.localeStorageSvc.get(USER_STORAGE_KEY);
      }

    isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    login(credentials: Credentials): Observable<AuthResult> {
        return this.http.post(`${this.baseUrl}/users/authenticate`, credentials)      
        .pipe(
            tap((res: AuthResult) => { 
                console.log(`authentication succeeded for ${credentials.userName}`);  
                this.setCurrentUser(res.id, res.userName);
            }),
            catchError(this.handleError<any>(`login`))
        );
    }

    logout(): void {
        this.currentUser = null;
        this.localeStorageSvc.remove(USER_STORAGE_KEY);
        this.localeStorageSvc.remove(USER_STORAGE_EXPIRE_KEY);
    }

    private setCurrentUser(id: number, userName: string){
        const user = {
            id: id,
            userName: userName,
            isAdmin: false
        };
        this.currentUser = user;      
        this.localeStorageSvc.store(USER_STORAGE_KEY, user);
        this.localeStorageSvc.store(USER_STORAGE_EXPIRE_KEY, this.momentSvc.getUserAuthExpirationDate());
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
