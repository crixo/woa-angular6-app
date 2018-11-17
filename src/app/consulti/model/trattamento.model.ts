import { IEntity, Tipo } from './index';

export class Trattamento implements IEntity {
  id: number;
  data: Date;
  pazienteId: number;
  consultoId: number;
  descrizione: string;
  
  constructor(data?: Date) {
    this.id = 0;
    this.data = data;
  }

}