import { Quests } from '../../types/quest';
import QuestCard from '../quest-card/quest-card';

type QuestsListProps = {
  quests: Quests;
}

function QuestsList ({ quests }: QuestsListProps): JSX.Element {

  return (
    <div className="cards-grid">
      {
        quests.map((quest) => (
          <QuestCard
            key={ quest.id }
            quest={ quest }
          />
        ))
      }
    </div>
  );
}

export default QuestsList;
