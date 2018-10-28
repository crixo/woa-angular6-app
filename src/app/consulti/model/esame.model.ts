import { IEntity, Tipo } from './index';

export class Esame implements IEntity {
  id: number;
  data: Date;
  pazienteId: number;
  consultoId: number;
  descrizione: string;
  tipo: Tipo;
  
  constructor() {
    this.id = 0;
  }

}