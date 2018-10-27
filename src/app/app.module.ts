import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';

import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';

//import './string-prototypes';


@NgModule({
  imports:[ 
    BrowserModule, BrowserAnimationsModule,
    HttpClientModule, 
    AppRoutingModule,
    UserModule,
    MessageModule
   ],
  //exports: [BrowserAnimationsModule],
  declarations: [ AppComponent ],
  providers: [

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }