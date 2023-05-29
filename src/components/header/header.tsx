import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import Logo from '../logo/logo';

function Header (): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo isLink/>
        <nav className="main-nav header__main-nav">
          {
            (authorizationStatus === AuthorizationStatus.Auth)
              ?
              <ul className="main-nav__list">
                <li className="main-nav__item">
                  <Link className="link" to="/">Квесты</Link>
                </li>
                <li className="main-nav__item">
                  <Link className="link" to={ AppRoute.Contacts }>Контакты</Link>
                </li>
                <li className="main-nav__item">
                  <Link className="link" to={ AppRoute.Reservation }>Мои бронирования</Link>
                </li>
              </ul>
              :
              <ul className="main-nav__list">
                <li className="main-nav__item">
                  <Link className="link" to="/">Квесты</Link>
                </li>
                <li className="main-nav__item">
                  <Link className="link active" to={ AppRoute.Contacts }>Контакты</Link>
                </li>
              </ul>
          }
        </nav>

        {
          (authorizationStatus === AuthorizationStatus.Auth)
            ?
            <div className="header__side-nav">
              <Link
                className="btn btn--accent header__side-item"
                to={ AppRoute.Main }
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutAction());
                }}
              >Выйти
              </Link>
              <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
            </div>
            :
            <div className="header__side-nav">
              <Link className="btn header__side-item header__login-btn" to={ AppRoute.Login }>Вход</Link>
              <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
            </div>
        }
      </div>
    </header>
  );
}

export default Header;
