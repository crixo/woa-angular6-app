import { IEntity } from './entity.interface';

export class Consulto implements IEntity {
  id: number;
  data: Date;
  pazienteId: number;
  problemaIniziale: string;
  constructor() {
    this.id = 0;
}
}