import { sizeMapping } from "@/constants";
import type Size from "@/constants/types/size";
import styles from "@/styles/modules/progress.module.scss";
import clsx from "clsx";
import type React from "react";

type Props = {
	size: Size;
	value: number;
};

function Progress({ size = "medium", value = 0 }: Props) {
	const newSize = (key: string) => sizeMapping[key] || "Medium";
	return (
		<progress
			className={clsx(styles.Base, size && styles[`${newSize(size)}`])}
			value={value}
			max={100}
		/>
	);
}

export default Progress;
