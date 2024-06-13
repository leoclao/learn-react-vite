import styles from "@/styles/modules/product.module.scss";
import clsx from "clsx";

/**
 * Renders a row component for displaying product information.
 * 
 * @param {Object} product - The product object containing name, stocked status, and price.
 * @returns {JSX.Element} A row component displaying the product name, price, and styling based on stock availability.
 */
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
