import { NameSpace } from '../../const';
import { Reservations } from '../../types/reservation';
import { State } from '../../types/state';

export const getReservationsList = (state: State): Reservations => state[NameSpace.Reservation].reservationsList;

export const getReservationsListCompletingStatus = (state: State): boolean => state[NameSpace.Reservation].isReservationsListCompleting;
