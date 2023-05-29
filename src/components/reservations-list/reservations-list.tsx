import { Reservations } from '../../types/reservation';
import ReservationCard from '../reservation-card/reservation-card';

type ReservationsListProps = {
  reservationsList: Reservations;
}

function ReservationsList ({ reservationsList }: ReservationsListProps): JSX.Element {

  return (
    <div className="cards-grid">
      {
        reservationsList.map((reservationItem) => (
          <ReservationCard
            key={ reservationItem.id }
            reservationItem={ reservationItem }
          />
        ))
      }
    </div>
  );
}

export default ReservationsList;
