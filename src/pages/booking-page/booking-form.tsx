/* eslint-disable no-console */
import {Place} from '../../types/place';
import {useForm} from 'react-hook-form';
import {BookindDate} from '../../types/booking-data';

type BookingFormProps = {
  questId: string;
  currentPlace: Place;
}

interface IFormInput {
  date: BookindDate;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
  userAgreement: boolean;
}

export function BookingForm({questId, currentPlace}: BookingFormProps): JSX.Element {
  const {slots} = currentPlace;
  const {register, handleSubmit } = useForm<IFormInput>();

  const formHandler = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <form
      className="booking-form"
      onSubmit={(evt) => {
        handleSubmit(formHandler)(evt);
      }}
    >
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
                    key={slot.time}
                  >
                    <input
                      type="radio"
                      id={slotId}
                      required
                      value={slotId}
                      disabled={slot.isAvailable}
                      {...register('date')}
                    />
                    <span className="custom-radio__label">{slot.time}</span>
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
                      id={slotId}
                      required
                      value={slotId}
                      disabled={slot.isAvailable}
                      {...register('date')}
                    />
                    <span className="custom-radio__label">{slot.time}</span>
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
          <input {...register('contactPerson')} type="text" id="name" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"/>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input {...register('phone')} type="tel" id="tel" placeholder="Телефон" required pattern="[0-9]{10,}"/>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input {...register('peopleCount')} type="number" id="person" placeholder="Количество участников" required/>
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input {...register('withChildren')} type="checkbox" id="children" checked/>
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
        <input {...register('userAgreement')} type="checkbox" id="id-order-agreement" required/>
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
  );
}


