import { Consulto } from "./consulto.model";
import { AnamnesiRemota } from "./anamnesi-remota.model";
import { Paziente } from "src/app/pazienti/model/paziente.model";

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
  consulti: Consulto[];
  anamnesiRemote: AnamnesiRemota[];

  update(paziente: Paziente){
    this.id = paziente.id;
    this.cap = paziente.cap;
    this.cellulare = paziente.cellulare;
    this.citta = paziente.citta;
    this.cognome = paziente.cognome;
    this.dataDiNascita = paziente.dataDiNascita;
    this.email = paziente.email;
    this.indirizzo = paziente.indirizzo;
    this.nome = paziente.nome;
    this.professione = paziente.professione;
    this.prov = paziente.prov;
    this.telefono = paziente.telefono;
  }
}