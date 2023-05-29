import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
import { AppRoute, APIRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import {BookingData} from '../types/booking-data';
import { Quests } from '../types/quest';
import { QuestDescription } from '../types/quest-description';
import { Places } from '../types/place';
import { Reservation } from '../types/reservation';
//import { ReservationStatus } from '../types/reservation-data';

//Получение списка квестов
export const fetchQuestsListAction = createAsyncThunk<Quests, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'quest/fetchQuestsList',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Quests>(APIRoute.QuestsList);
    return data;
  }
);

//Получение информации о квесте
export const fetchCurrentQuestAction = createAsyncThunk<QuestDescription | null, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'quest/fetchCurrentQuest',
  async(id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<QuestDescription>(`${ APIRoute.CurrentQuest }/${ id }`);
      return data;
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
      return null;
    }
  }
);

//Получение массива мест (place) проведения квеста, где можно выполнить бронирование квеста
export const fetchPlacesListAction = createAsyncThunk<Places, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'booking/fetchPlacesList',
  async(id, { extra: api }) => {
    const { data } = await api.get<Places>(`/quest/${id}/booking`);
    return data;
  }
);

//Бронирование квеста
export const fetchAddBooking = createAsyncThunk<Reservation, BookingData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'booking/fetchAddBooking',
  async({ questId, booking }, { extra: api }) => {
    const { data } = await api.post<Reservation>(`${ APIRoute.CurrentQuest }/${ questId }/booking`, booking);
    return data;
  }
);

//Получение информации о бронированиях пользователя
export const fetchReservationAction = createAsyncThunk<Reservation[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'reservation/fetchReservation',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Reservation[]>(APIRoute.Reservation);
    return data;
  },
);

// //Удаление бронирования
export const deleteReservationAction = createAsyncThunk<Reservation[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reservation/deleteReservationAction',
  async (id, { extra: api }) => {
    await api.delete(`${APIRoute.Reservation}/${id}`);
    const { data } = await api.get<Reservation[]>(APIRoute.Reservation);
    return data;
  },
);

//Проверка статуса авторизации пользователя
export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async(_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

//Авторизация пользователя на сервере
export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email,password });
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  },
);

//Завершение сеанса пользователя
export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async(_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
