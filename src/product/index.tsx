import clsx from "clsx";
import { useState } from "react";
import styles from "./../styles/modules/product.module.scss";
import Board from "./Board";
import SearchBar from "./SearchBar";

function FilterableProduct({ products }) {
	const [filterText, setFilterText] = useState("");
	const [inStockOnly, setInStockOnly] = useState(false);
	return (
		<div className={clsx(styles.filterable)}>
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
	);
}

export default FilterableProduct;
