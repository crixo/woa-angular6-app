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

  constructor(data?: Date) {
    this.id = 0;
    this.data = data;
  }

}