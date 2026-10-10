import css from './SideBar.module.css';
import type { FilterName } from './filterGroups';

type FilterOptionProps = {
  name: FilterName;
  value: string;
  label: string;
};

export default function FilterOption({
  name,
  value,
  label,
}: FilterOptionProps) {
  return (
    <label className={css.filterOption}>
      <input className={css.radio} type="radio" name={name} value={value} />
      <svg className={css.radioIcon} width={24} height={24} aria-hidden="true">
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
      {label}
    </label>
  );
}
