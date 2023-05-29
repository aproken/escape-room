import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { questProcess } from './quest-process/quest-process';
import { bookingProcess } from './booking-process/booking-process';
import { questData } from './quest-data/quest-data';
import { userProcess } from './user-process/user-process';
import {reservationProcess} from './reservation-process/reservation-process';

export const rootReducer = combineReducers({
  [NameSpace.Quest]: questProcess.reducer,
  [NameSpace.QuestData]: questData.reducer,
  [NameSpace.Booking]: bookingProcess.reducer,
  [NameSpace.Reservation]: reservationProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
