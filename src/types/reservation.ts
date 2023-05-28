import { Date, Level, Type } from '../const';

export type Reservation = {
  date: Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: Level;
    type: Type;
    peopleMinMax: [number, number];
  };
}

export interface IFormInput {
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
}
