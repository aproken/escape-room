export enum BookindDate {
  today = 'today',
  tomorrow = 'tomorrow'
}

export type BookingRequest = {
  date: BookindDate;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

export type BookingData = {
  questId: string;
  booking: BookingRequest;
}

