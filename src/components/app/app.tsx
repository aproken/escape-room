import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { HelmetProvider } from 'react-helmet-async';

import { AppRoute, AuthorizationStatus } from '../../types/const';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import QuestPage from '../../pages/quest-page/quest-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import BookingPage from '../../pages/booking-page/booking-page';
import Reservation from '../../pages/reservation/reservation';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <MainPage /> } />
          <Route path='*' element={<NotFoundPage />} />
          <Route path={ AppRoute.Contacts } element={ <ContactsPage /> } />
          <Route path={ AppRoute.Login } element={ <LoginPage /> } />
          <Route path={ AppRoute.Quest } element={ <QuestPage /> } />
          <Route path={ AppRoute.Booking} element={
            <PrivateRoute authorizationStatus={ AuthorizationStatus.Auth }>
              <BookingPage />
            </PrivateRoute>
          }
          />
          <Route path={ AppRoute.Reservation } element={
            <PrivateRoute authorizationStatus={ AuthorizationStatus.Auth }>
              <Reservation />
            </PrivateRoute>
          }
          />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

