import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchCurrentQuestAction,
  fetchPlacesListAction,
} from '../../store/api-actions';
import {
  getCurrentQuest,
  getCurrentQuestCompletingStatus,
} from '../../store/quest-data/selectors';
import {
  getPlacesList,
  getPlacesListCompletingStatus,
} from '../../store/booking-process/selectors';
import Map from '../../components/map/map';
import LoadingScreen from '../loading-screen/loading-screen';
import { BookingForm } from './booking-form';

function BookingPage (): JSX.Element {
  const { questId } = useParams() as {questId: string};
  const dispatch = useAppDispatch();

  const currentQuest = useAppSelector(getCurrentQuest);
  const isCurrentQuestCompleting = useAppSelector(getCurrentQuestCompletingStatus);
  const placesList = useAppSelector(getPlacesList);
  const isPlacesListCompleting = useAppSelector(getPlacesListCompletingStatus);
  const [ activeLocationId, setActiveLocationId ] = useState<string>('');

  useEffect(() => {
    dispatch(fetchCurrentQuestAction(questId));
    dispatch(fetchPlacesListAction(questId));
  }, [dispatch, questId]);

  if (!isCurrentQuestCompleting || !currentQuest || !isPlacesListCompleting || !placesList ) {
    return <LoadingScreen />;
  }

  const activePlace = placesList.find((place) => place.id === activeLocationId) || placesList[0];

  const { title, coverImg, coverImgWebp, } = currentQuest;

  if (!activePlace) {
    throw new Error('active place not found');
  }

  const { location: { address } } = activePlace;

  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet={ coverImgWebp } />
          <img src={ coverImg } srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
        </picture>
      </div>
      <div className="container container--size-s">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
          </h1>
          <p className="title title--size-m title--uppercase page-content__title">{ title }</p>
        </div>
        <div className="page-content__item">
          <div className="booking-map">
            <div className="map">
              <Map
                locations={ placesList }
                activeLocationId={ activePlace.id }
                setActiveLocation={setActiveLocationId}
              />
            </div>
            <p className="booking-map__address">Вы&nbsp;выбрали: { address }</p>
          </div>
        </div>
        <BookingForm questId={questId} currentPlace={activePlace} />
      </div>
    </main>
  );
}

export default BookingPage;
