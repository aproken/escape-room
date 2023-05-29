import { useRef, FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';
import {
  AppRoute,
  AuthorizationStatus,
} from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function LoginPage (): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main}/>;
  }

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const submitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (
      loginRef.current !== null &&
      (passwordRef.current !== null && isValidPassword(passwordRef.current.value))
    ) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const isValidPassword = (password: string) => {
    const pattern = new RegExp('^(?=.*[0-9])(?=[a-zA-Z0-9]*[a-zA-Z])[a-zA-Z0-9]{2,20}$');
    return pattern.test(password);
  };

  return (
    <main className="decorated-page login">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt="" />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="login__form">
          <form
            className="login-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
            onSubmit={ submitHandle }
          >
            <div className="login-form__inner-wrapper">
              <h1 className="title title--size-s login-form__title">Вход</h1>
              <div className="login-form__inputs">
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
                  <input
                    ref={ loginRef }
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Адрес электронной почты"
                    required
                  />
                </div>
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="password">Пароль</label>
                  <input
                    ref={ passwordRef }
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Пароль"
                    required
                  />
                </div>
              </div>
              <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти</button>
            </div>
            <label className="custom-checkbox login-form__checkbox">
              <input
                type="checkbox"
                id="id-order-agreement"
                name="user-agreement"
                required
              />
              <span className="custom-checkbox__icon">
                <svg width="20" height="17" aria-hidden="true">
                  <use xlinkHref="#icon-tick"></use>
                </svg>
              </span>
              <span className="custom-checkbox__label">Я&nbsp;согласен с&nbsp;
                <a className="link link--active-silver link--underlined" href="todo">правилами обработки персональных данных
                </a>&nbsp;и пользовательским соглашением
              </span>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
