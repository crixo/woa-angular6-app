import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';

import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';
import { EnvServiceProvider } from './services/env.service.provider';
import { StorageServiceModule } from 'angular-webstorage-service';
import { LocalStorageService } from './services/local-storage.service';

//import './string-prototypes';


@NgModule({
  imports:[ 
    BrowserModule, BrowserAnimationsModule,
    HttpClientModule, 
    AppRoutingModule,
    UserModule,
    MessageModule,
    StorageServiceModule
   ],
  //exports: [BrowserAnimationsModule],
  declarations: [ AppComponent ],
  providers: [
    EnvServiceProvider, LocalStorageService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }