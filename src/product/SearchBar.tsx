import clsx from 'clsx';
import styles from './../styles/modules/product.module.scss';

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form className={clsx(styles["search-bar"])}>
      <div className={clsx(styles["search-bar__field"])}>
        <input
          type="text"
          title="Search"
          value={filterText}
          placeholder="Search"
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />{` Only show products in stock`}
        </label>
      </div>
    </form>
  );
}

export default SearchBar;