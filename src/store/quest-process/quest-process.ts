import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { QuestProcess } from '../../types/state';
import {
  fetchQuestsListAction,
} from '../api-actions';

const initialState: QuestProcess = {
  questsList: [],
  isQuestsListCompleting: false,
};

export const questProcess = createSlice({
  name: NameSpace.Quest,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsListAction.pending, (state) => {
        state.isQuestsListCompleting = true;
      })
      .addCase(fetchQuestsListAction.fulfilled, (state, action) => {
        state.questsList = action.payload;
        state.isQuestsListCompleting = false;
      })
      .addCase(fetchQuestsListAction.rejected, (state) => {
        state.isQuestsListCompleting = true;
      });
  }
});
