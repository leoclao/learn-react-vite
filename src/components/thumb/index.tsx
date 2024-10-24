import { ratioMapping, sizeMapping } from "@/constants";
import styles from "@/styles/modules/thumb.module.scss";
import type { Ratio, Size, compBaseProps } from "@/types";
import clsx from "clsx";

interface Props extends compBaseProps {
	className?: string,
	customStyle?: string,
	ratio: Ratio;
	src: string;
	desc?: string;
	title?: string;
	alt?: string;
	isHideFigCap?: boolean;
	loading?: "lazy" | "eager";
	size: Size;
}

function Thumb({
	className,
	customStyle,
	ratio,
	src,
	desc,
	title,
	alt,
	isHideFigCap = false,
	loading,
	size,
}: Props) {
	const newSize = (key: Size) => sizeMapping[key] || "Medium";
	const newRatio = (key: Ratio) => ratioMapping[key] || "16x9";

	return (
		<figure
			className={clsx(
				!customStyle && styles.Base,
				!customStyle && styles[`${newSize(size)}`],
				!customStyle && styles[`${newRatio(ratio)}`],
				!customStyle && className,
				customStyle,
			)}
		>
			<img src={src} alt={alt} title={title} loading={loading} />
			{desc && !isHideFigCap && <figcaption>{desc}</figcaption>}
		</figure>
	);
}

export default Thumb;
