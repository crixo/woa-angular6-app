import { Field } from '../../helpers/fields';

export const DATE = (disabled=false, key='data', label='Data', required=true) => ({
  ...Field.field(
    'date',
    key,
    {
      label: label + (required? ' *':''),
      placeholder: '__/__/____',
      disabled: disabled,
      required: required,
      attributes: {
        autocomplete: 'off',
      },
    },
    {
      
    }
  ),
});
