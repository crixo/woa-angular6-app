import { IEntity, AnamnesiProssima, Esame } from './index';

export class Consulto implements IEntity {
  id: number;
  data: Date;
  pazienteId: number;
  problemaIniziale: string;
  anamnesiProssima: AnamnesiProssima;
  esami: Esame[];

  constructor() {
    this.id = 0;
  }

}