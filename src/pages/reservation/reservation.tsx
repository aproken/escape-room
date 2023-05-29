import { useAppSelector, useAppDispatch } from '../../hooks';
import { getReservationsList, getReservationsListCompletingStatus } from '../../store/reservation-process/selectors';
import ReservationsList from '../../components/reservations-list/reservations-list';
import {useEffect} from 'react';
import {fetchReservationAction} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';

function Reservation (): JSX.Element {
  const dispatch = useAppDispatch();
  const reservationList = useAppSelector(getReservationsList);
  const isReservationsListCompletingStatus = useAppSelector(getReservationsListCompletingStatus);

  useEffect(() => {
    dispatch(fetchReservationAction());
  }, [dispatch]);

  if (!isReservationsListCompletingStatus || !reservationList ) {
    return <LoadingScreen />;
  }

  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
        </picture>
      </div>
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
        </div>
        <ReservationsList reservationsList={ reservationList } />
      </div>
    </main>
  );
}

export default Reservation;
