import { Field } from '../../../../ui-form/helpers/fields';

export const DESCRIPTION = (
              disabled=false, 
              key:string='descrizione', 
              label: string='Descrizione') => ({
  ...Field.textarea(
    key,
    {
      label: label,
      placeholder: 'Enter a ' + label.toLowerCase(),
      rows: 5,
      required: true,
      disabled: disabled
    }
  )
});
