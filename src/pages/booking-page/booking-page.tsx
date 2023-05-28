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

function BookingPage (): JSX.Element {
  const { questId } = useParams() as {questId: string};
  const dispatch = useAppDispatch();

  const currentQuest = useAppSelector(getCurrentQuest);
  const isCurrentQuestCompleting = useAppSelector(getCurrentQuestCompletingStatus);
  const placesList = useAppSelector(getPlacesList);
  const isPlacesListCompleting = useAppSelector(getPlacesListCompletingStatus);

  const [ selectedSlotId, setSelectedSlot ] = useState<string>('');

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

  const { location: { address }, slots } = activePlace;

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
        <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post">
          <fieldset className="booking-form__section">
            <legend className="visually-hidden">Выбор даты и времени</legend>
            <fieldset className="booking-form__date-section">
              <legend className="booking-form__date-title">Сегодня</legend>
              <div className="booking-form__date-inner-wrapper">
                {
                  slots.today.map((slot) => {
                    const slotId = `today_${slot.time}`;
                    return (
                      <label
                        className="custom-radio booking-form__date"
                        key={ slot.time }
                      >
                        <input
                          type="radio"
                          id={ slotId }
                          name="date"
                          required
                          value={ slotId }
                          disabled={ slot.isAvailable }
                          checked={ selectedSlotId === slotId }
                          onChange={() => setSelectedSlot(slotId)}
                        />
                        <span className="custom-radio__label">{ slot.time }</span>
                      </label>
                    );
                  })
                }
              </div>
            </fieldset>
            <fieldset className="booking-form__date-section">
              <legend className="booking-form__date-title">Завтра</legend>
              <div className="booking-form__date-inner-wrapper">
                {
                  slots.tomorrow.map((slot) => {
                    const slotId = `tomorrow_${slot.time}`;
                    return (
                      <label
                        className="custom-radio booking-form__date"
                        key={slot.time}
                      >
                        <input
                          type="radio"
                          id={ slotId }
                          name="date"
                          required
                          value={ slotId }
                          disabled={ slot.isAvailable }
                          checked={ selectedSlotId === slotId }
                          onChange={() => setSelectedSlot(slotId)}
                        />
                        <span className="custom-radio__label">{ slot.time }</span>
                      </label>
                    );
                  })
                }
              </div>
            </fieldset>
          </fieldset>
          <fieldset className="booking-form__section">
            <legend className="visually-hidden">Контактная информация</legend>
            <div className="custom-input booking-form__input">
              <label className="custom-input__label" htmlFor="name">Ваше имя</label>
              <input type="text" id="name" name="name" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}" />
            </div>
            <div className="custom-input booking-form__input">
              <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
              <input type="tel" id="tel" name="tel" placeholder="Телефон" required pattern="[0-9]{10,}" />
            </div>
            <div className="custom-input booking-form__input">
              <label className="custom-input__label" htmlFor="person">Количество участников</label>
              <input type="number" id="person" name="person" placeholder="Количество участников" required />
            </div>
            <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
              <input type="checkbox" id="children" name="children" checked />
              <span className="custom-checkbox__icon">
                <svg width="20" height="17" aria-hidden="true">
                  <use xlinkHref="#icon-tick"></use>
                </svg>
              </span>
              <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
            </label>
          </fieldset>
          <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
          <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
            <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
            <span className="custom-checkbox__icon">
              <svg width="20" height="17" aria-hidden="true">
                <use xlinkHref="#icon-tick"></use>
              </svg>
            </span>
            <span className="custom-checkbox__label">Я&nbsp;согласен с
              <a className="link link--active-silver link--underlined" href="todo">правилами обработки персональных данных
              </a>&nbsp;и пользовательским соглашением
            </span>
          </label>
        </form>
      </div>
    </main>
  );
}

export default BookingPage;
