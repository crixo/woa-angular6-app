import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  template: `
<div *ngIf="useModal" class="modal-header">
  <h4 class="modal-title">{{formTitle}}</h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  <form [formGroup]="form" (ngSubmit)="submit()">
    <formly-form [model]="model" [fields]="fields" [form]="form"></formly-form>
  </form>
</div>  
  `
})
export class EntityFormBaseComponent<TEntity>{
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];
  public useModal: Boolean = true;
  @Input() model: TEntity;
  @Output() modelSubmitted = new EventEmitter<TEntity>();

  constructor(activeModal: NgbActiveModal) {
    this.useModal = activeModal != null;
  } 


  public submit() {
    console.log(this.model)
    this.modelSubmitted.emit(this.model);
  }  
}