import { Date } from '../const';

export type BookingData = {
  questId: string;
  booking: {
    date: Date;
    time: string;
    contactPerson: string;
    phone: string;
    withChildren: boolean;
    peopleCount: number;
    placeId: string;
  };
}
