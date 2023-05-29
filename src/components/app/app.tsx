import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { AppRoute, isCheckedAuth } from '../../const';
import PrivateRoute from '../private-route/private-route';

import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import QuestPage from '../../pages/quest-page/quest-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import BookingPage from '../../pages/booking-page/booking-page';
import Reservation from '../../pages/reservation/reservation';

import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

import { getQuestsList, getQuestsListCompletingStatus } from '../../store/quest-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function App(): JSX.Element {
  const quests = useAppSelector(getQuestsList);
  const isQuestsListCompleting = useAppSelector(getQuestsListCompletingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (isCheckedAuth(authorizationStatus) || isQuestsListCompleting) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={ browserHistory }>
        <Routes>
          <Route
            path="/"
            element={ <Layout /> }
          >
            <Route
              index
              element={ <MainPage quests={ quests } /> }
            />
            <Route
              path='*'
              element={<NotFoundPage />}
            />
            <Route
              path={ AppRoute.Contacts }
              element={ <ContactsPage /> }
            />
            <Route
              path={ AppRoute.Login }
              element={ <LoginPage /> }
            />
            <Route
              path={ AppRoute.Quest }
              element={ <QuestPage /> }
            />
            <Route
              path={ AppRoute.Booking}
              element={
                <PrivateRoute
                  authorizationStatus={ authorizationStatus }
                >
                  <BookingPage />
                </PrivateRoute>
              }
            />
            <Route
              path={ AppRoute.Reservation }
              element={
                <PrivateRoute
                  authorizationStatus={ authorizationStatus }
                >
                  <Reservation />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;

