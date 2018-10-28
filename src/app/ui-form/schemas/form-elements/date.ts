import { Field } from '../../helpers/fields';

export const DATE = (disabled=false, key='data', label='Data') => ({
  ...Field.field(
    'date',
    key,
    {
      label: label,
      placeholder: '__/__/____',
      disabled: disabled,
      attributes: {
        autocomplete: 'off',
      },
    },
    {
      
    }
  ),
});
