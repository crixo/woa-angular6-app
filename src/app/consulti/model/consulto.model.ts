import { IEntity, AnamnesiProssima, Esame, Trattamento, Valutazione } from './index';

export class Consulto implements IEntity {
  id: number;
  data: Date;
  pazienteId: number;
  problemaIniziale: string;
  anamnesiProssima: AnamnesiProssima;
  esami: Esame[];
  trattamenti: Trattamento[];
  valutazioni: Valutazione[];

  constructor() {
    this.id = 0;
  }

}