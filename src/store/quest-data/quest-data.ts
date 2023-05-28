import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { QuestData } from '../../types/state';
import {
  fetchCurrentQuestAction,
} from '../api-actions';

const initialState: QuestData = {
  currentQuest: null,
  isCurrentQuestCompleting: false,
};

export const questData = createSlice({
  name: NameSpace.Quest,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentQuestAction.pending, (state) => {
        state.isCurrentQuestCompleting = false;
      })
      .addCase(fetchCurrentQuestAction.fulfilled, (state, action) => {
        state.currentQuest = action.payload;
        state.isCurrentQuestCompleting = true;
      })
      .addCase(fetchCurrentQuestAction.rejected, (state) => {
        state.isCurrentQuestCompleting = true;
      });
  }
});
