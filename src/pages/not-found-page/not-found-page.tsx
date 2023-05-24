import { Link } from 'react-router-dom';

function NotFoundPage (): JSX.Element {
  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" />
          <img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt="" />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--uppercase">error</h1>
          <h1 className="title title--size-l title--uppercase">404</h1>
          <h1 className="title title--size-s title--uppercase">page not found</h1>

          <Link className="btn btn--accent btn--cta quest-page__btn" to="/">Вернуться на главную</Link>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
