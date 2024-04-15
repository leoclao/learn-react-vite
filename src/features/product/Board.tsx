import clsx from "clsx";
import Category from "./Category";
import Row from "./Row";

import styles from "./../styles/modules/product.module.scss";

function Board({ products, filterText, inStockOnly }) {
	const rows = [];
	let lastCategory = null;

	for (const product of products) {
		if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
			continue;
		}

		if (inStockOnly && !product.stocked) {
			continue;
		}

		if (product.category !== lastCategory) {
			rows.push(
				<Category
					className={clsx(styles.board__category)}
					category={product.category}
					key={product.category}
				/>,
			);
		}

		rows.push(<Row product={product} key={product.name} />);

		lastCategory = product.category;
	}

	return (
		<div className={clsx(styles.board)}>
			<div className={clsx(styles.board__header)}>
				<div className={clsx(styles.board__header__name)}>Name</div>
				<div className={clsx(styles.board__header__price)}>Price</div>
			</div>
			<div className={clsx(styles.board__content)}>{rows}</div>
		</div>
	);
}

export default Board;
