import useDebounce from "@/hooks/useDebounce";
import styles from "@/styles/modules/product.module.scss";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import Board from "./Board";
import SearchBar from "./SearchBar";

/**
 * FilterableProduct component displays a filterable list of products with search and in-stock filter options.
 *
 * @param {Object[]} products - The array of products to display.
 *
 * @returns {JSX.Element} A React component that renders a filterable product list.
 */
function FilterableProduct({ products }) {
	const [filterText, setFilterText] = useState("");
	const [inStockOnly, setInStockOnly] = useState(false);
	const debounceValue = useDebounce(filterText, 500);

	useEffect(() => {
		console.log("debounceValue", debounceValue);
	}, [debounceValue]);

	return (
		<div className={clsx(styles.filterable)}>
			<SearchBar
				filterText={filterText}
				inStockOnly={inStockOnly}
				filterPlaceholder={"Search for products with hook debounce"}
				onFilterTextChange={setFilterText}
				onInStockOnlyChange={setInStockOnly}
			/>
			{debounceValue}
			<Board
				products={products}
				filterText={filterText}
				inStockOnly={inStockOnly}
			/>
		</div>
	);
}

export default FilterableProduct;
