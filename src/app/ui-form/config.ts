import {
  maxlengthValidationMessage,
  maxValidationMessage,
  minlengthValidationMessage,
  minValidationMessage
} from './helpers/validations-messages';
import { maximumMoneyValidation } from './helpers/validators';
import { PanelWrapperComponent, PanelPopupWrapperComponent } from './wrappers/panel-wrapper.component';
import { RepeatSectionComponent } from './types/repeat-section.component';
import { FormlyFieldInputMoney } from './types/money.component';
import { FormlyFieldInputPercentage } from './types/percentage.component';
import { FormlyFieldInputDate } from './types/date.component';
import { ErrorWrapperComponent } from './wrappers/error.component';
import { ConfigOption } from "@ngx-formly/core/lib/services/formly.config";

export const config: ConfigOption = {
  validationMessages: [
    { name: 'required', message: 'This field is required' },
    { name: 'minlength', message: minlengthValidationMessage },
    { name: 'maxlength', message: maxlengthValidationMessage },
    { name: 'min', message: minValidationMessage },
    { name: 'max', message: maxValidationMessage },
    { name: 'maximumMoneyValidation', message: 'should be 100' }
  ],
  wrappers: [
    { name: 'panel', component: PanelWrapperComponent },
    { name: 'panel-popup', component: PanelPopupWrapperComponent },
    { name: 'error-on-top', component: ErrorWrapperComponent }
  ],
  types: [
    { name: 'repeat', component: RepeatSectionComponent },
    { name: 'money', component: FormlyFieldInputMoney },
    { name: 'percentage', component: FormlyFieldInputPercentage },
    { name: 'date', component: FormlyFieldInputDate }
  ],
  validators: [
    { name: 'maximumMoneyValidation', validation: maximumMoneyValidation }
  ]
};
