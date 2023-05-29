import QuestsList from '../../components/quests-list/quests-list';
import Filter from '../../components/filter/filter';
import {filterQuestByLevelType, filterQuestsByFilterType} from '../../components/filter/comp';
import { FilterType, LevelType } from '../../components/filter/type';
import { Quests } from '../../types/quest';
import {useState} from 'react';

type MainPageProps = {
  quests: Quests;
}

function MainPage ({ quests }: MainPageProps): JSX.Element {
  const [selectedLevel, setSelectedLevel] = useState<LevelType>(LevelType.Any);
  const [selectedType, setSelectedType] = useState<FilterType>(FilterType.All);

  const filteredQuests = filterQuestsByFilterType(
    filterQuestByLevelType(quests, selectedLevel),
    selectedType);
  return (
    <main className="page-content">
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
          </h1>
          <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
        </div>
        <div className="page-content__item">
          <Filter
            type={selectedType}
            setType={setSelectedType}
            level={selectedLevel}
            setLevel={setSelectedLevel}
          />
        </div>
        <h2 className="title visually-hidden">Выберите квест</h2>
        <QuestsList quests={ filteredQuests }/>
      </div>
    </main>
  );
}

export default MainPage;
