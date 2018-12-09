import { Injectable } from '@angular/core';
import { IUser } from './user';
import { AuthResult, Credentials } from './user.model';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../services/env.service';
import { LocalStorageService } from '../services/local-storage.service';
import { MomentService } from '../shared/services/moment.service';
import { HttpErrorHandler, HandleError } from '../services/http-error-handler.service';

const USER_STORAGE_KEY: string = "USER_STORAGE_KEY";
const USER_STORAGE_EXPIRE_KEY: string = "USER_STORAGE_EXPIRE_KEY";

@Injectable()
export class AuthService {
    currentUser: IUser;
    redirectUrl: string;
    baseUrl: string;
    private handleError: HandleError;

    constructor(private http: HttpClient, 
        private env: EnvService, 
        private localeStorageSvc: LocalStorageService, 
        private momentSvc: MomentService,
        httpErrorHandler: HttpErrorHandler
        ) {
        this.baseUrl = this.env.apiBaseUrl + '/api';
        this.handleError = httpErrorHandler.createHandleError('AuthService');
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
            catchError(this.handleError('login', null))
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
}
