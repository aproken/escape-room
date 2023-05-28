import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { questProcess } from './quest-process/quest-process';
import { bookingProcess } from './booking-process/booking-process';
import { questData } from './quest-data/quest-data';

export const rootReducer = combineReducers({
  [NameSpace.Quest]: questProcess.reducer,
  [NameSpace.QuestData]: questData.reducer,
  [NameSpace.Booking]: bookingProcess.reducer,
});
