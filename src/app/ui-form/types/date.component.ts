import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

@Component({
  selector: 'formly-field-input-date',
  template: `
   <div class="form-group">
     <label class="form-control-label control-label">
       {{ to.label }}
     </label>
     <input type="text" class="form-control" [textMask]="{mask: dateMask, pipe: autoCorrectedDatePipe}" [formControl]="formControl" [formlyAttributes]="field">
   </div>
 `
})
export class FormlyFieldInputDate extends FieldType {
  autoCorrectedDatePipe = createAutoCorrectedDatePipe('dd/mm/yyyy');
  public dateMask(val){
    
    return [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  }
}
