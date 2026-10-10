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
    </aside>
  );
}
