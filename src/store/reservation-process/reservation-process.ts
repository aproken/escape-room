import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReservationProcess } from '../../types/state';
import {
  deleteReservationAction,
  fetchReservationAction,
} from '../api-actions';

const initialState: ReservationProcess = {
  reservationsList: [],
  isReservationsListCompleting: false,
};

export const reservationProcess = createSlice({
  name: NameSpace.Reservation,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReservationAction.pending, (state) => {
        state.isReservationsListCompleting = false;
      })
      .addCase(fetchReservationAction.fulfilled, (state, action) => {
        state.reservationsList = action.payload;
        state.isReservationsListCompleting = true;
      })
      .addCase(fetchReservationAction.rejected, (state) => {
        state.isReservationsListCompleting = true;
      })
      .addCase(deleteReservationAction.fulfilled, (state, action) => {
        state.reservationsList = action.payload;
      });
  }
});
