import clsx from "clsx";
import type React from "react";

import styles from "./../../styles/modules/grid.module.scss";

interface Props {
	cols: string;
	gap: string;
	children: React.ReactElement;
}

function Grid({ cols = "none", gap = "gap", children }: Props) {
	const newGapClass = `-${gap}`;
	const newColClass = `-${cols}`;

	const className = clsx(
		styles.grid,
		!!gap && styles[`gap${newGapClass}`],
		!!cols && styles[`grid-cols${newColClass}`],
	);

	return <div className={className}>{children}</div>;
}

export default Grid;
