import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { QuestProcess } from '../../types/state';
import {
  fetchQuestsListAction,
  fetchCurrentQuestAction,
} from '../api-actions';

const initialState: QuestProcess = {
  questsList: [],
  currentQuest: null,
  isQuestsListCompleting: false,
  isCurrentQuestCompleting: false,
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
      })
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
