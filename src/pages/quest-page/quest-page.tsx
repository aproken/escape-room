import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchCurrentQuestAction,
} from '../../store/api-actions';
import {
  getCurrentQuest,
  getCurrentQuestCompletingStatus,
} from '../../store/quest-data/selectors';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';

function QuestPage (): JSX.Element {
  const { questId } = useParams();
  const dispatch = useAppDispatch();

  const currentQuest = useAppSelector(getCurrentQuest);
  const isCurrentQuestCompleting = useAppSelector(getCurrentQuestCompletingStatus);

  useEffect(() => {
    if (questId) {
      dispatch(fetchCurrentQuestAction(questId));
    }
  }, [dispatch, questId]);

  if (!questId) {
    return <NotFoundPage />;
  }

  if (!isCurrentQuestCompleting || !currentQuest) {
    return <LoadingScreen />;
  }

  const { title, coverImg, coverImgWebp, level, type, description, } = currentQuest;
  const [ peopleMin, peopleMax ] = currentQuest.peopleMinMax;

  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet={ coverImgWebp } />
          <img src={ coverImg } srcSet={`${ coverImg } 2x`} width="1366" height="768" alt="" />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">{ title }</h1>
          <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{ type }
          </p>
          <ul className="tags tags--size-l quest-page__tags">
            <li className="tags__item">
              <svg width="11" height="14" aria-hidden="true">
                <use xlinkHref="#icon-person"></use>
              </svg>{ peopleMin }&ndash;{ peopleMax}&nbsp;чел
            </li>
            <li className="tags__item">
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-level"></use>
              </svg>{ level }
            </li>
          </ul>
          <p className="quest-page__description">{ description }</p>
          <Link className="btn btn--accent btn--cta quest-page__btn" to={ `/quest/${ questId }/booking` }>Забронировать</Link>
        </div>
      </div>
    </main>
  );
}

export default QuestPage;
