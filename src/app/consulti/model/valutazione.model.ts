import { IEntity } from './index';

export class Valutazione implements IEntity {
  id: number;
  pazienteId: number;
  consultoId: number;
  strutturale: string;
  cranioSacrale: string;
  akOrtodontica: string;
  
  constructor() {
    this.id = 0;
  }

}