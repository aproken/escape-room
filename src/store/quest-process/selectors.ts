import { NameSpace } from '../../const';
import { Quests } from '../../types/quest';
import { State } from '../../types/state';

export const getQuestsList = (state: State): Quests => state[NameSpace.Quest].questsList;

export const getQuestsListCompletingStatus = (state: State): boolean => state[NameSpace.Quest].isQuestsListCompleting;
