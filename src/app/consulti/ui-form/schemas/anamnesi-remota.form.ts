import { DESCRIPTION } from './form-elements/description';
import { DATE } from '../../../ui-form/schemas/form-elements/date';
import { Field } from '../../../ui-form/helpers/fields';
import { Tipo } from '../../model/tipo.model';

export const ANAMNESI_REMOTA_FORM = (tipi: Tipo[], disabled = false) => ({
  id: 'ANAMNESI-REMOTA',
  template: [
    {
      wrappers: ['panel'],
      templateOptions: {
        label: 'Formly'
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