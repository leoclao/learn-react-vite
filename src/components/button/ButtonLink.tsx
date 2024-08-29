import type { Size } from "@/types/type";
import clsx from "clsx";
import type React from "react";

import styles from "@/styles/modules/button.module.scss";

interface Props {
	className?: string;
	hollow: boolean;
	href?: string;
	label?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	size: Size;
	target: string;
	title: string;
}

function ButtonLink({
	className,
	hollow = false,
	href,
	label,
	size = "medium",
	target = "_parent",
	title,
}: Props) {
	const newClassName = clsx(
		styles.base,
		styles[`${size}`],
		hollow && styles.hollow,
		className
	);

	return (
		<a className={newClassName} href={href} title={title} target={target}>
			{label}
		</a>
	);
}

export default ButtonLink;
