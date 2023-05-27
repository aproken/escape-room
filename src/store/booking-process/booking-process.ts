import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { BookingProcess } from '../../types/state';
import {
  fetchBookingsAction,
  fetchAddBooking,
} from '../api-actions';

const initialState: BookingProcess = {
  places: [],
  isBookingCompleting: false,
  addBookingIsSuccess: false,
};

export const bookingProcess = createSlice({
  name: NameSpace.Booking,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookingsAction.fulfilled, (state, action) => {
        state.places = action.payload;
        state.isBookingCompleting = true;
      })
      .addCase(fetchAddBooking.pending, (state) => {
        state.addBookingIsSuccess = false;
      })
      .addCase(fetchAddBooking.fulfilled, (state) => {
        state.addBookingIsSuccess = true;
      })
      .addCase(fetchAddBooking.rejected, (state) => {
        state.addBookingIsSuccess = false;
      });
  }
});
