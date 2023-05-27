import { Link } from 'react-router-dom';
import { Quest } from '../../types/quest';

type QuestCardProps = {
  quest: Quest;
}

function QuestCard ({ quest }: QuestCardProps): JSX.Element {
  const { title, previewImg, previewImgWebp, level, peopleMinMax, } = quest;
  const [ peopleMin, peopleMax ] = peopleMinMax;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={ previewImgWebp } />
          <img src={ previewImg } width="344" height="232" alt={`Изображение к квесту ${title}`} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={ `/quest/${ quest.id }` }>{ title }</Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{`${ peopleMin }–${ peopleMax } чел`}
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{ level }
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestCard;
