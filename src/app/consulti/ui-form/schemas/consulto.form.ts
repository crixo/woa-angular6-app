import { DESCRIPTION } from './form-elements/description';
import { DATE } from '../../../ui-form/schemas/form-elements/date';

export const CONSULTO_FORM = (panel:string, disabled = false) => ({
  id: 'CONSULTO',
  template: [
    {
      wrappers: [panel],
      templateOptions: {
        label: 'Consulto',
        // attributes: { //https://github.com/formly-js/ngx-formly/issues/987
        //   autocomplete: 'off',
        // },
      },
      fieldGroup: [
        DATE(disabled),
        DESCRIPTION(disabled, 'problemaIniziale', 'Problema Iniziale'),
      ]
    }
  ]
});