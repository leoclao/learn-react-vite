import { useState } from "react";
import clsx from "clsx";
import Board from "./Board";
import SearchBar from "./SearchBar";
import styles from "./../styles/modules/product.module.scss";

function FilterableProduct({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div className={clsx(styles["filterable"])}>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <Board
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}

export default FilterableProduct;