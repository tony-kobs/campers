'use client';

import { SubmitEvent } from 'react';
import type {
  CamperForm,
  Engine,
  GetCampersParams,
  Transmission,
} from '@/types/camper';
import FilterOption from './FilterOption';
import { filterGroups } from './filterGroups';
import css from './SideBar.module.css';

type Props = {
  onSearch: (filters: GetCampersParams) => void;
  onClear: () => void;
};

export default function SideBar({ onSearch, onClear }: Props) {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const location = String(data.get('location') ?? '').trim();
    const form = String(data.get('form') ?? '');
    const engine = String(data.get('engine') ?? '');
    const transmission = String(data.get('transmission') ?? '');
    onSearch({
      ...(location ? { location } : {}),
      ...(form ? { form: form as CamperForm } : {}),
      ...(engine ? { engine: engine as Engine } : {}),
      ...(transmission ? { transmission: transmission as Transmission } : {}),
    });
  };
  return (
    <aside className={css.sideBar}>
      <form onSubmit={handleSubmit}>
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

          {filterGroups.map((group) => (
            <fieldset key={group.name} className={css.filterGroup}>
              <legend className={css.filterLegend}>{group.legend}</legend>
              {group.options.map((option) => (
                <FilterOption
                  key={option.value}
                  name={group.name}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </fieldset>
          ))}
        </div>
        <div className={css.actions}>
          <button type="submit" className={css.searchButton}>
            Search
          </button>
          <button type="reset" onClick={onClear} className={css.clearButton}>
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
      </form>
    </aside>
  );
}
