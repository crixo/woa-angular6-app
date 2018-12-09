import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SecurityModule } from './security/security.module';
import { EnvServiceProvider } from './services/env.service.provider';
import { StorageServiceModule } from 'angular-webstorage-service';
import { LocalStorageService } from './services/local-storage.service';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageModule } from './messages/message.module';
import * as moment from 'moment';
import { MomentService } from './services/moment.service';
//import './string-prototypes';

@NgModule({
  imports:[ 
    BrowserModule, BrowserAnimationsModule,
    HttpClientModule, 
    AppRoutingModule,
    MessageModule,
    SecurityModule.forRoot(),
    StorageServiceModule,
   ],
  //exports: [BrowserAnimationsModule],
  declarations: [ AppComponent ],
  providers: [
    { provide: 'moment', useFactory: (): any => moment },
    MomentService,
    EnvServiceProvider, LocalStorageService, HttpErrorHandler
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }