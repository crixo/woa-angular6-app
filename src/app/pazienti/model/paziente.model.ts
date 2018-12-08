export class Paziente {
  id: number;
  cap: string;
  cellulare: string;
  citta: string;
  cognome: string;
  dataDiNascita: Date;
  email: string;
  indirizzo: string;
  nome: string;
  professione: string;
  prov: string;
  telefono: string;
}

export interface Provincia{
  sigla: string;
  descrizione: string;
}