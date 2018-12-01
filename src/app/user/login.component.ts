import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Credentials } from './user.model'
import { LOGIN_FORM } from './login.form';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: 'login-form',
    template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
        <formly-form [model]="model" [fields]="fields" [form]="form"></formly-form>
    </form>    
    `
})
export class LoginComponent implements OnInit   {
    public form = new FormGroup({});
    public fields: FormlyFieldConfig[];
    errorMessage: string;
    pageTitle = 'Log In';
    model: Credentials = new Credentials();
    @Output() credentialsSubmitted = new EventEmitter<Credentials>();

    ngOnInit() {
        this.fields= [
            ...LOGIN_FORM().template
        ]; 
    }

    public submit() {
        console.log(this.model);
        this.credentialsSubmitted.emit(this.model);
      }  
}