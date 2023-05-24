import { Link } from 'react-router-dom';

type LogoProps = {
  isLink: boolean;
}

function Logo ({ isLink }: LogoProps): JSX.Element {
  const svgImg = (
    <svg width="134" height="52" aria-hidden="true">
      <use xlinkHref="#logo"></use>
    </svg>
  );
  if (isLink) {
    return (
      <Link className="logo header__logo" to="/">
        {svgImg}
      </Link>
    );
  } else {
    return (
      <span className="logo header__logo">
        {svgImg}
      </span>
    );
  }
}

export default Logo;
