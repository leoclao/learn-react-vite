import styles from "@/styles/modules/product.module.scss";
import type { Product } from "@/types/interface";
import clsx from "clsx";
import Category from "./Category";
import ProductItem from "./ProductItem";

interface BoardProps {
	products: Product[];
	filterText: string;
	inStockOnly: boolean;
}

function Board({ products, filterText, inStockOnly }: BoardProps) {
	const productItem = [];
	let lastCategory: string | null = null;

	for (const product of products) {
		if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
			continue;
		}

		if (inStockOnly && !product.inStock) {
			continue;
		}
		
		const category = product.category ?? "Uncategorized";

		if (category !== lastCategory) {
			productItem.push(
				<Category
					className={clsx(styles.board__category)}
					category={category}
					key={product.id}
				/>,
			);
		}

		productItem.push(<ProductItem product={product} key={product.id} />);

		lastCategory = category;
	}

	return (
		<div className={clsx(styles.board)}>
			<div className={clsx(styles.board__header)}>
				<div className={clsx(styles.board__header__name)}>Name</div>
				<div className={clsx(styles.board__header__price)}>Price</div>
			</div>
			<div className={clsx(styles.board__content)}>{productItem}</div>
		</div>
	);
}

export default Board;
