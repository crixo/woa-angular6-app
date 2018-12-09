import { Injectable } from '@angular/core';
import { IAuthUser } from './authUser';
import { LocalStorageService } from '../services/local-storage.service';
import { MomentService } from '../services/moment.service';

const USER_STORAGE_KEY: string = "USER_STORAGE_KEY";
const USER_STORAGE_EXPIRE_KEY: string = "USER_STORAGE_EXPIRE_KEY";

// @Injectable({
//     providedIn: 'root',
//   })
@Injectable()
export class AuthService {
    currentUser: IAuthUser;
    redirectUrl: string;
    baseUrl: string;

    constructor(
        private localeStorageSvc: LocalStorageService, 
        private momentSvc: MomentService
        ) {
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

    logout(): void {
        console.log(`logging out current user: ${this.currentUser}`);
        this.currentUser = null;
        this.localeStorageSvc.remove(USER_STORAGE_KEY);
        this.localeStorageSvc.remove(USER_STORAGE_EXPIRE_KEY);
    }

    setCurrentUser(id: number, userName: string){
        const user = {
            id: id,
            userName: userName,
            isAdmin: false
        };
        this.currentUser = user;      
        this.localeStorageSvc.store(USER_STORAGE_KEY, user);
        this.localeStorageSvc.store(USER_STORAGE_EXPIRE_KEY, this.momentSvc.getUserAuthExpirationDate());
        console.log(`set current user: ${this.currentUser.userName}`);
    } 
}
