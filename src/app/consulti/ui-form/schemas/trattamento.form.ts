import { DESCRIPTION } from '../../../ui-form/schemas/form-elements/description';
import { DATE } from '../../../ui-form/schemas/form-elements/date';

export const TRATTAMENTO_FORM = (disabled = false) => ({
  id: 'TRATTAMENTO',
  template: [
    {
      wrappers: ['panel-popup'],
      templateOptions: {
        label: 'Trattamento',
        // attributes: { //https://github.com/formly-js/ngx-formly/issues/987
        //   autocomplete: 'off',
        // },
      },
      fieldGroup: [
        DATE(disabled),
        DESCRIPTION(disabled),
      ]
    }
  ]
});