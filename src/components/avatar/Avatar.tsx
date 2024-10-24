import styles from "@/styles/modules/avatar.module.scss";
import type { Ratio, Size } from "@/types";
import buildImageUrl from "@/utils";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface Props {
	className?: string;
	size?: Size;
	ratio?: Ratio;
	src?: string;
	alt?: string;
	title?: string;
	longdesc?: string;
	ariaDescribedby?: string;
}

function Avatar({
	className,
	size,
	ratio,
	src,
	alt,
	title,
	longdesc,
	ariaDescribedby,
}: Props) {
	const [newSize, setNewSize] = useState("");
	const [newRatio, setNewRatio] = useState("");

	useEffect(() => {
		if (size !== undefined) setNewSize(size);
		if (ratio !== undefined) setNewRatio(ratio);
	}, [size, ratio]);
	// const newSrc = () => {
	//   src.map((item) => {
	//     console.log(buildImageUrl(item));
	//   })
	// }
	// src.map((item) => {
	//   console.log(buildImageUrl(item.domain));
	// })

	return (
		<div
			className={clsx(styles.base, className, styles[`${newSize}${newRatio}`])}
		>
			{src && (
				<img
					src={buildImageUrl(src[0])}
					alt={alt}
					title={title}
					data-longdesc={longdesc}
					aria-describedby={ariaDescribedby}
				/>
			)}
		</div>
	);
}

export default Avatar;
