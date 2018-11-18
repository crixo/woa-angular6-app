import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  // The values that are defined here are the default values that can
  // be overridden by env.js
  // https://www.jvandemo.com/how-to-use-environment-variables-to-configure-your-angular-application-without-a-rebuild/

  public apiBaseUrl = '';
  public envName = '';
  public enableDebug = true;
  public configurationLoaded = false;

  constructor() { }
}
