import {FilterType, LevelType} from './type';
import {Quests} from '../../types/quest';

export function filterQuestByLevelType(quests: Quests, levelType: LevelType): Quests {
  if (levelType === LevelType.Any) {
    return quests;
  }

  return quests.filter((quest) => quest.level.toString() === levelType.toString());
}

export function filterQuestsByFilterType(quests: Quests, filterType: FilterType): Quests {
  if (filterType === FilterType.All) {
    return quests; // Вернуть все квесты без фильтрации
  }

  return quests.filter((quest) => quest.type.toString() === filterType.toString());
}
