import { clsx } from "clsx";
import styles from "../styles/modules/container.module.scss";
import Fluid from "./Fluid";
import Swipe from "./Swipe";

interface Props {
	type?: string;
	// align: eAlign;
	children: React.ReactElement;
}

function Container({ children, type }: Props) {
	// const alignment = clsx();

	if (type === "FLUID") {
		return (
			<Fluid className={clsx([`${styles["container--fluid"]}`])}>
				{children}
			</Fluid>
		);
	}

	if (type === "SWIPE") {
		return (
			<Swipe className={clsx([`${styles["container--swipe"]}`])}>
				{children}
			</Swipe>
		);
	}

	return <div className={clsx(styles.container)}>{children}</div>;
}

export default Container;
