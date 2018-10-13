import { Field } from '../helpers/fields';

export const PAZIENTE_FORM = (province, disabled = false) => ({
  id: 'PAZIENTE',
  template: [
    {
      wrappers: ['panel'],
      templateOptions: {
        label: 'Paziente'
      },
      fieldGroup: [{
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-6',
              type: 'input',
              key: 'nome',
              templateOptions: {
                label: 'Nome',
              },
            },
            {
              className: 'col-6',
              type: 'input',
              key: 'cognome',
              templateOptions: {
                label: 'Cognome',
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.nome',
              },
            },
          ],
        },{
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-9',
              type: 'input',
              key: 'professione',
              placeholder: 'professione',
              templateOptions: {
                label: 'Professione',
              },
            },
            Field.field(
              'date',
              'dataDiNascita',
              {
                label: 'Data di nascita',
                placeholder: '__/__/____',
                disabled: disabled
              },
              {
                className: 'col-3'
              }
            ),
          ],
        },{
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-12',
              type: 'input',
              key: 'indirizzo',
              placeholder: 'inserisci un indirizzo',
              templateOptions: {
                label: 'Indirizzo',
              },
            },
          ],
        },{
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-2',
              type: 'input',
              key: 'cap',
              placeholder: 'cap',
              templateOptions: {
                label: 'CAP',
              },
            },
            {
              className: 'col-8',
              type: 'input',
              key: 'citta',
              placeholder: 'inserisci una città',
              templateOptions: {
                label: 'Città',
              },
            },    
            {
              className: 'col-2',
              type: 'select',
              key: 'prov',
              templateOptions: {
                label: 'Prov',
                options: province,
                valueProp: 'sigla',
                labelProp: 'descrizione',
              },
            },
          ],
        },{
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-6',
              type: 'input',
              key: 'telefono',
              placeholder: 'inserisci telefono',
              templateOptions: {
                label: 'Telefono',
              },
            },
            {
              className: 'col-6',
              type: 'input',
              key: 'cellulare',
              placeholder: 'inserisci cellulare',
              templateOptions: {
                label: 'Cellulare',
              },
            }, 
          ],
        },{
          fieldGroupClassName: 'row',
          fieldGroup: [            
            {
              className: 'col-12',
              type: 'input',
              key: 'email',
              placeholder: 'inserisci email',
              templateOptions: {
                label: 'Email',
              },
            },                     
          ],
        },
      ]
    }   
  ]
});
