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
				<FieldBase id="inputSearchBar" value={filterText} placeHolder={filterPlaceholder} onChange={(e) => onFilterTextChange(e.target.value)} />
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
