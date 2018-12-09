import { TEXT } from '../ui-form/schemas/form-elements';
import { Field } from '../ui-form/helpers/fields';

export const LOGIN_FORM = (disabled = false) => ({
  id: 'LOGIN',
  template: [
    {
      wrappers: ['panel'],
      templateOptions: {
        label: 'Login'
      },
      fieldGroup: [
        TEXT(disabled, 'userName', 'UserName', true),
        Field.password('password')
      ]
    }
  ]
});