import { sizeMapping } from "@/constants/mapping";
import styles from "@/styles/modules/progress.module.scss";
import type { Size } from "@/types/type";
import clsx from "clsx";

type Props = {
	size: Size;
	value: number;
};

function Progress({ size = "medium", value = 0 }: Props) {
	const newSize = (key: Size) => sizeMapping[key] || "Medium";
	return (
		<progress
			className={clsx(styles.Base, size && styles[`${newSize(size)}`])}
			value={value}
			max={100}
		/>
	);
}

export default Progress;
