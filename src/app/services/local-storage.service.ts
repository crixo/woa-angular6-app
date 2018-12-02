import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable()
export class LocalStorageService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
    public get(key: string): any {
      //get array of tasks from local storage
      return this.storage.get(key) || null;
  }

  public store(key: string, value: any): void {
    // insert updated array to local storage
    this.storage.set(key, value);
  }    

  public remove(key: string): void {
    // insert updated array to local storage
    this.storage.remove(key);
  }    
}