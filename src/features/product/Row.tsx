import clsx from "clsx";
import styles from "@/styles/modules/product.module.scss";

function Row({ product }) {
	const name = product.stocked ? (
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

export default Row;
