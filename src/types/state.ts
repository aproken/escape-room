import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { UserData } from './user-data';
import { Quests } from './quest';
import { QuestDescription } from './quest-description';
import { Places } from './place';

export type QuestProcess = {
  questsList: Quests;
  isQuestsListCompleting: boolean;
}

export type QuestData = {
  currentQuest: QuestDescription | null;
  isCurrentQuestCompleting: boolean;
}

export type BookingProcess = {
  placesList: Places;
  isPlacesListCompleting: boolean;
  addBookingIsSuccess: boolean;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
