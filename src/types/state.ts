import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { UserData } from './user-data';
import { Quests } from './quest';
import { QuestInfo } from './quest-info';
import { Places } from './place';

export type QuestProcess = {
  questsList: Quests;
  currentQuest: QuestInfo | null;
  isQuestsListCompleting: boolean;
  isCurrentQuestCompleting: boolean;
}

export type BookingProcess = {
  places: Places;
  isBookingCompleting: boolean;
  addBookingIsSuccess: boolean;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
