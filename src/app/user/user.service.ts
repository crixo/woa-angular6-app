import { Injectable } from '@angular/core';
import { IUser, Credentials } from './user.model';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../services/env.service';
import { HttpErrorHandler, HandleError } from '../services/http-error-handler.service';
import { AuthService } from '../security/auth.service';

@Injectable()
export class UserService {
    baseUrl: string;
    private handleError: HandleError;

    constructor(private http: HttpClient, 
        private env: EnvService, 
        private authService: AuthService,
        httpErrorHandler: HttpErrorHandler
        ) {
        this.baseUrl = this.env.apiBaseUrl + '/api';
        this.handleError = httpErrorHandler.createHandleError('AuthService');
      }

    login(credentials: Credentials): Observable<IUser> {
        return this.http.post(`${this.baseUrl}/users/authenticate`, credentials)      
        .pipe(
            tap((res: IUser) => { 
                console.log(`authentication succeeded for ${credentials.userName}`);  
                //this.authService.setCurrentUser(res.id, res.userName);
            }),
            catchError(this.handleError('login', null))
        );
    }

    logout(): void {
        this.authService.logout();
    }
}
