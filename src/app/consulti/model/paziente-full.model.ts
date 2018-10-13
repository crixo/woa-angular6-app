import { Consulto } from "./consulto.model";

export class PazienteFull {
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
  consulti: Consulto[]
}