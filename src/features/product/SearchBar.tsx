import { FieldBase } from "@/components/Field";
import styles from "@/styles/modules/product.module.scss";
import clsx from "clsx";

interface Props {
	filterText: string;
	inStockOnly?: boolean;
	filterPlaceholder?: string;
	onFilterTextChange?: (value: string) => void;
	onInStockOnlyChange?: (value: boolean) => void;
}

/**
 * SearchBar component for displaying a search bar with filter options.
 *
 * @param filterText - The current filter text value.
 * @param inStockOnly - Boolean indicating whether to show only products in stock.
 * @param filterPlaceholder - The placeholder text for the search bar input.
 * @param onFilterTextChange - Function to handle changes in the filter text.
 * @param onInStockOnlyChange - Function to handle changes in the inStockOnly status.
 *
 * @returns JSX element representing the search bar component with filter options.
 */
function SearchBar({
	filterText,
	inStockOnly = false,
	filterPlaceholder = "Search bar",
	onFilterTextChange,
	onInStockOnlyChange,
}: Props) {
	return (
		<form className={clsx(styles["search-bar"])}>
			<div className={clsx(styles["search-bar__field"])}>
				<FieldBase
					id="inputSearchBar"
					value={filterText}
					placeHolder={filterPlaceholder}
					onChange={(e) => onFilterTextChange(e.target.value)}
				/>
				<label>
					<input
						type="checkbox"
						checked={inStockOnly}
						onChange={(e) => onInStockOnlyChange(e.target.checked)}
					/>
					{"Only show products in stock"}
				</label>
			</div>
		</form>
	);
}

export default SearchBar;
