import { DESCRIPTION, TEXT } from './form-elements';

export const ANAMNESI_PROSSIMA_FORM = (disabled = false) => ({
  id: 'ANAMNESI-REMOTA',
  template: [
    {
      wrappers: ['panel'],
      templateOptions: {
        label: 'Anamnesi Prossima'
      },
      fieldGroup: [
        TEXT(disabled, 'primaVolta', 'PrimaVolta'),
        TEXT(disabled, 'tipologia'),
        TEXT(disabled, 'localizzazione'),
        TEXT(disabled, 'irradiazione'),
        TEXT(disabled, 'periodoInsorgenza', 'Periodo Insorgenza'),
        TEXT(disabled, 'familiarita', 'Familiarità'),
        TEXT(disabled, 'altreTerapie', 'Altre Terapie'),
        DESCRIPTION(disabled, 'varie', 'Varie', false),
      ]
    }
  ]
});