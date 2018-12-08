import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';


export class EntityFormBaseComponent<TEntity>{
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];
  @Input() useModal: Boolean = false;
  @Input() model: TEntity;
  @Output() modelSubmitted = new EventEmitter<TEntity>();

  public submit() {
    console.log(this.model)
    this.modelSubmitted.emit(this.model);
  }  
}