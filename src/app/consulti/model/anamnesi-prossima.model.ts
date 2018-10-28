import { IEntity } from "./entity.interface";

export class AnamnesiProssima implements IEntity {
  id: number;
  pazienteId: number;
  consultoId: number;
  primaVolta: string;
  tipologia: string;
  localizzazione: string;
  irradiazione: string;
  periodoInsorgenza: string;
  durata: string;
  familiarita: string;
  altreTerapie: string;
  varie: string;
}