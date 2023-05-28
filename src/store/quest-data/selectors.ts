import { NameSpace } from '../../const';
import { QuestDescription } from '../../types/quest-description';
import { State } from '../../types/state';

export const getCurrentQuest = (state: State): QuestDescription | null => state[NameSpace.QuestData].currentQuest;
export const getCurrentQuestCompletingStatus = (state: State): boolean => state[NameSpace.QuestData].isCurrentQuestCompleting;
