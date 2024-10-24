import styles from "@/styles/modules/product.module.scss";
import type { Product } from "@/types/interface";
import clsx from "clsx";

type Props = {
	product: Product;
};

function ProductItem({ product }: Props) {
	const name = product.inStock ? (
		product.name
	) : (
		<span className="red-text">{product.name}</span>
	);

	return (
		<div className={clsx(styles.row)}>
			<div className={clsx(styles.row__name)}>{name}</div>
			<div className={clsx(styles.row__price)}>{product.price}</div>
		</div>
	);
}

export default ProductItem;
