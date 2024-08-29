import useDebounce from "@/hooks/useDebounce";
import styles from "@/styles/modules/product.module.scss";
import type { Product } from "@/types/interface";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Board from "./Board";
import SearchBar from "./SearchBar";

interface FilterableProductProps {
	products: Product[];
}

function FilterableProduct({ products }: FilterableProductProps) {
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
