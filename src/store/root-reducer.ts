import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { questProcess } from './quest-process/quest-process';
import { bookingProcess } from './booking-process/booking-process';

export const rootReducer = combineReducers({
  [NameSpace.Quest]: questProcess.reducer,
  [NameSpace.Booking]: bookingProcess.reducer,
});
