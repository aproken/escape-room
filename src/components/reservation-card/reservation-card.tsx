import { Link } from 'react-router-dom';
import { Reservation } from '../../types/reservation';
import {deleteReservationAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';

type ReservationCardProps = {
  reservationItem: Reservation;
}

function ReservationCard ({ reservationItem }: ReservationCardProps): JSX.Element {
  const { id, title, previewImg, previewImgWebp, level, } = reservationItem.quest;
  const { date, time, location: { address }, peopleCount, } = reservationItem;
  const info = `[${date.toString()}, ${time.toString()}.${address.toString()}]`;

  const dispatch = useAppDispatch();
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
          <Link className="quest-card__link" to={ `/quest/${ id }` }>{ title }</Link>
          <span className="quest-card__info">{ info }</span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{`${ peopleCount } чел`}
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{ level }
          </li>
        </ul>
        <button
          className="btn btn--accent btn--secondary quest-card__btn"
          type="button"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(deleteReservationAction(reservationItem.id));
          }}
        >
          Отменить
        </button>
      </div>
    </div>
  );
}

export default ReservationCard;
