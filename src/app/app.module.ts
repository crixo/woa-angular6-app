import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';

import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';

//import './string-prototypes';


@NgModule({
  imports:[ 
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    UserModule,
    MessageModule
   ],
  declarations: [ AppComponent ],
  providers: [

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }