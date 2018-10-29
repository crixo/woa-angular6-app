
import { TEXT } from './form-elements';

export const VALUTAZIONE_FORM = (disabled = false) => ({
  id: 'VALUTAZIONE_FORM',
  template: [
    {
      wrappers: ['panel-popup'],
      templateOptions: {
        label: 'Valutazione',
        // attributes: { //https://github.com/formly-js/ngx-formly/issues/987
        //   autocomplete: 'off',
        // },
      },
      fieldGroup: [
        TEXT(disabled, 'strutturale'),
        TEXT(disabled, 'cranioSacrale', 'Cranio-Sacrale'),
        TEXT(disabled, 'akOrtodontica', 'Ak Ortodontica'),
      ]
    }
  ]
});