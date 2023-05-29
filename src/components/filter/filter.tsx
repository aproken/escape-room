import {LevelType, FilterType} from './type';

type FilterProps = {
  level: LevelType;
  setLevel: (id: LevelType) => void;
  type: FilterType;
  setType: (id: FilterType) => void;
}

function Filter ({ level, setLevel, type, setType }: FilterProps): JSX.Element {
  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          <li className="filter__item">
            <input
              type="radio"
              name="type"
              id="all"
              checked={ type === FilterType.All }
              onChange={() => setType(FilterType.All)}
            />
            <label className="filter__label" htmlFor="all">
              <svg className="filter__icon" width="26" height="30" aria-hidden="true">
                <use xlinkHref="#icon-all-quests"></use>
              </svg><span className="filter__label-text">Все квесты</span>
            </label>
          </li>
          <li className="filter__item">
            <input
              type="radio"
              name="type"
              id="adventure"
              checked={ type === FilterType.Adventure }
              onChange={() => setType(FilterType.Adventure)}
            />
            <label className="filter__label" htmlFor="adventure">
              <svg className="filter__icon" width="36" height="30" aria-hidden="true">
                <use xlinkHref="#icon-adventure"></use>
              </svg><span className="filter__label-text">Приключения</span>
            </label>
          </li>
          <li className="filter__item">
            <input
              type="radio"
              name="type"
              id="horror"
              checked={ type === FilterType.Horror }
              onChange = {() => setType(FilterType.Horror)}
            />
            <label className="filter__label" htmlFor="horror">
              <svg className="filter__icon" width="30" height="30" aria-hidden="true">
                <use xlinkHref="#icon-horror"></use>
              </svg><span className="filter__label-text">Ужасы</span>
            </label>
          </li>
          <li className="filter__item">
            <input
              type="radio"
              name="type"
              id="mystic"
              checked={ type === FilterType.Mystic }
              onChange = {() => setType(FilterType.Mystic)}
            />
            <label className="filter__label" htmlFor="mystic">
              <svg className="filter__icon" width="30" height="30" aria-hidden="true">
                <use xlinkHref="#icon-mystic"></use>
              </svg><span className="filter__label-text">Мистика</span>
            </label>
          </li>
          <li className="filter__item">
            <input
              type="radio"
              name="type"
              id="detective"
              checked={ type === FilterType.Detective }
              onChange = {() => setType(FilterType.Detective)}
            />
            <label className="filter__label" htmlFor="detective">
              <svg className="filter__icon" width="40" height="30" aria-hidden="true">
                <use xlinkHref="#icon-detective"></use>
              </svg><span className="filter__label-text">Детектив</span>
            </label>
          </li>
          <li className="filter__item">
            <input
              type="radio"
              name="type"
              id="sciFi"
              checked={ type === FilterType.SciFi }
              onChange = {() => setType(FilterType.SciFi)}
            />
            <label className="filter__label" htmlFor="sciFi">
              <svg className="filter__icon" width="28" height="30" aria-hidden="true">
                <use xlinkHref="#icon-sci-fi"></use>
              </svg><span className="filter__label-text">Sci-fi</span>
            </label>
          </li>
        </ul>
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <ul className="filter__list">
          <li className="filter__item">
            <input
              type="radio"
              name="level"
              id="any"
              checked={ level === LevelType.Any }
              onChange = {() => setLevel(LevelType.Any)}
            />
            <label className="filter__label" htmlFor="any"><span className="filter__label-text">Любой</span>
            </label>
          </li>
          <li className="filter__item">
            <input
              type="radio"
              name="level"
              id="easy"
              checked={ level === LevelType.Easy }
              onChange = {() => setLevel(LevelType.Easy)}
            />
            <label className="filter__label" htmlFor="easy"><span className="filter__label-text">Лёгкий</span>
            </label>
          </li>
          <li className="filter__item">
            <input
              type="radio"
              name="level"
              id="middle"
              checked={ level === LevelType.Middle }
              onChange = {() => setLevel(LevelType.Middle)}
            />
            <label className="filter__label" htmlFor="middle"><span className="filter__label-text">Средний</span>
            </label>
          </li>
          <li className="filter__item">
            <input
              type="radio"
              name="level"
              id="hard"
              checked={ level === LevelType.Hard }
              onChange = {() => setLevel(LevelType.Hard)}
            />
            <label className="filter__label" htmlFor="hard"><span className="filter__label-text">Сложный</span>
            </label>
          </li>
        </ul>
      </fieldset>
    </form>
  );
}

export default Filter;
