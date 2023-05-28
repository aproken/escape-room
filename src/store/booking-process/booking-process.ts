import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { BookingProcess } from '../../types/state';
import {
  fetchPlacesListAction,
  fetchAddBooking,
} from '../api-actions';

const initialState: BookingProcess = {
  placesList: [],
  isPlacesListCompleting: false,
  addBookingIsSuccess: false,
};

export const bookingProcess = createSlice({
  name: NameSpace.Booking,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPlacesListAction.fulfilled, (state, action) => {
        state.placesList = action.payload;
        state.isPlacesListCompleting = true;
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
