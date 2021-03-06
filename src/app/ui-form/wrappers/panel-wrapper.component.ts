import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-panel',
  template: `
    <div class="card mb-5">
      <div class="card-header">{{ to.label }}</div>
      <div class="card-body">
        <ng-container #fieldComponent></ng-container>
        <button type="submit" class="btn btn-dark float-right" [disabled]="!form.valid || form.pristine">
          Submit
        </button>
      </div>
    </div>
  `
})
export class PanelWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}

@Component({
  selector: 'formly-wrapper-panel-popup',
  template: `
    <div>
      <ng-container #fieldComponent></ng-container>
      <button type="submit" class="btn btn-dark float-right" [disabled]="!form.valid || form.pristine">
        Submit
      </button>
    </div>
  `
})
export class PanelPopupWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
