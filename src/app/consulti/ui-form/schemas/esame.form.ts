import { DESCRIPTION } from './form-elements/description';
import { DATE } from '../../../ui-form/schemas/form-elements/date';
import { Field } from '../../../ui-form/helpers/fields';
import { Tipo } from '../../model/tipo.model';

export const ESAME_FORM = (tipi: Tipo[], disabled = false) => ({
  id: 'ESAME',
  template: [
    {
      wrappers: ['panel-popup'],
      templateOptions: {
        label: 'Esame'
      },
      fieldGroup: [
        DATE(disabled),
        Field.select('tipoId',{
          label: 'Tipo',
          options: tipi,
          valueProp: 'id',
          labelProp: 'descrizione',
        }),
        DESCRIPTION(disabled),
      ]
    }
  ]
});