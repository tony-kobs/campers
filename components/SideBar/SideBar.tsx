import css from './SideBar.module.css';

export default function SideBar() {
  return (
    <aside className={css.sideBar}>
      <div className={css.location}>
        <label className={css.locationLabel} htmlFor="location">
          Location
        </label>
        <div className={css.locationField}>
          <svg className={css.icon} width={20} height={20} aria-hidden="true">
            <use href="/sprite.svg#map" />
          </svg>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Kyiv"
            className={css.locationInput}
          />
        </div>
      </div>
      <div className={css.filters}>
        <h2 className={css.filtersTitle}>Filters</h2>

        <fieldset className={css.filterGroup}>
          <legend className={css.filterLegend}>Camper form</legend>

          <label className={css.filterOption}>
            <input
              className={css.radio}
              type="radio"
              name="form"
              value="alcove"
            />
            <svg
              className={css.radioIcon}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio" />
            </svg>
            <svg
              className={css.radioIconChecked}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio-checked" />
            </svg>
            Alcove
          </label>
          <label className={css.filterOption}>
            <input
              className={css.radio}
              type="radio"
              name="form"
              value="panel_van"
            />
            <svg
              className={css.radioIcon}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio" />
            </svg>
            <svg
              className={css.radioIconChecked}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio-checked" />
            </svg>
            Panel Van
          </label>
          <label className={css.filterOption}>
            <input
              className={css.radio}
              type="radio"
              name="form"
              value="integrated"
            />
            <svg
              className={css.radioIcon}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio" />
            </svg>
            <svg
              className={css.radioIconChecked}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio-checked" />
            </svg>
            Integrated
          </label>
          <label className={css.filterOption}>
            <input
              className={css.radio}
              type="radio"
              name="form"
              value="semi_integrated"
            />
            <svg
              className={css.radioIcon}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio" />
            </svg>
            <svg
              className={css.radioIconChecked}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio-checked" />
            </svg>
            Semi integrated
          </label>
        </fieldset>
        <fieldset className={css.filterGroup}>
          <legend className={css.filterLegend}>Engine</legend>

          <label className={css.filterOption}>
            <input
              className={css.radio}
              type="radio"
              name="engine"
              value="diesel"
            />
            <svg
              className={css.radioIcon}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio" />
            </svg>
            <svg
              className={css.radioIconChecked}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio-checked" />
            </svg>
            Diesel
          </label>
          <label className={css.filterOption}>
            <input
              className={css.radio}
              type="radio"
              name="engine"
              value="petrol"
            />
            <svg
              className={css.radioIcon}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio" />
            </svg>
            <svg
              className={css.radioIconChecked}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio-checked" />
            </svg>
            Petrol
          </label>
          <label className={css.filterOption}>
            <input
              className={css.radio}
              type="radio"
              name="engine"
              value="hybrid"
            />
            <svg
              className={css.radioIcon}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio" />
            </svg>
            <svg
              className={css.radioIconChecked}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio-checked" />
            </svg>
            Hybrid
          </label>
          <label className={css.filterOption}>
            <input
              className={css.radio}
              type="radio"
              name="engine"
              value="electric"
            />
            <svg
              className={css.radioIcon}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio" />
            </svg>
            <svg
              className={css.radioIconChecked}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio-checked" />
            </svg>
            Electric
          </label>
        </fieldset>
        <fieldset className={css.filterGroup}>
          <legend className={css.filterLegend}>Transmission</legend>

          <label className={css.filterOption}>
            <input
              className={css.radio}
              type="radio"
              name="transmission"
              value="automatic"
            />
            <svg
              className={css.radioIcon}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio" />
            </svg>
            <svg
              className={css.radioIconChecked}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio-checked" />
            </svg>
            Automatic
          </label>
          <label className={css.filterOption}>
            <input
              className={css.radio}
              type="radio"
              name="transmission"
              value="manual"
            />
            <svg
              className={css.radioIcon}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio" />
            </svg>
            <svg
              className={css.radioIconChecked}
              width={24}
              height={24}
              aria-hidden="true"
            >
              <use href="/sprite.svg#radio-checked" />
            </svg>
            Manual
          </label>
        </fieldset>
      </div>
      <div className={css.actions}>
        <button type="button" className={css.searchButton}>
          Search
        </button>
        <button type="button" className={css.clearButton}>
          <svg
            className={css.clearIcon}
            width={24}
            height={24}
            aria-hidden="true"
          >
            <use href="/sprite.svg#close" />
          </svg>
          Clear filters
        </button>
      </div>
    </aside>
  );
}
