import { Field } from '../../../../ui-form/helpers/fields';
import {capitalize} from '../../../../string-prototypes';

export const TEXT = (
              disabled=false, 
              key:string, 
              label?: string,
              required: boolean = false) => ({
  ...Field.input(
    key,
    {
      label: label? label : capitalize(key),
      placeholder: 'inserisci ' + (label? label.toLowerCase() : key),
      required: required,
      disabled: disabled
    }
  )
});

