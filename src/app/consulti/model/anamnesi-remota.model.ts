import { Tipo } from "./tipo.model";

export class AnamnesiRemota {
  id: number;
  pazienteId: number;
  data: Date;
  tipoId: number;
  descrizione: string;
  tipo: Tipo;

  constructor(data?: Date) {
    this.id = 0;
    this.data = data;
  }
}