import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../types/const';

function Header (): JSX.Element {
  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo isLink/>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="link" to="/">Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className="link active" to={ AppRoute.Contacts }>Контакты</Link>
            </li>
          </ul>
        </nav>
        <div className="header__side-nav">
          <Link className="btn header__side-item header__login-btn" to={ AppRoute.Login }>Вход</Link>
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
