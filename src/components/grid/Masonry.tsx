import styles from "@/styles/modules/grid.module.scss";
import clsx from "clsx";
import { useId } from "react";

interface Props {
	cols?: string;
	gap?: string;
	children: React.ReactElement;
}

function Masonry({ cols, gap, children }: Props) {
	const uniqueId = useId();
	const newMasonryClass = "masonry";
	const newGapClass = gap ? `Gap${gap}` : "Gap";
	const newColsClass = cols ? `Cols${cols}` : "Cols";

	const className = clsx(
		styles[newMasonryClass],
		styles[`masonry${newGapClass}`],
		styles[`masonry${newColsClass}`],
	);

	return (
		<div key={uniqueId} className={className}>
			{children}
		</div>
	);
}

export default Masonry;
