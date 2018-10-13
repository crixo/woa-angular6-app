import { DESCRIPTION } from './form-elements/description';
import { DATE } from '../../../ui-form/schemas/form-elements/date';

export const CONSULTO_FORM = (disabled = false) => ({
  id: 'CONSULTO',
  template: [
    {
      wrappers: ['panel'],
      templateOptions: {
        label: 'Formly'
      },
      fieldGroup: [
        DATE(disabled),
        DESCRIPTION(disabled, 'problemaIniziale', 'Problema Iniziale'),
      ]
    }
  ]
});