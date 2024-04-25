import styles from "@/styles/modules/container.module.scss";
import type { ContainerLayout } from '@/utils';
import { clsx } from "clsx";
import Fluid from "./Fluid";
import Swipe from "./Swipe";

interface Props {
	type?: ContainerLayout;
	// align: eAlign;
	children: React.ReactElement;
}

function RibbonContainer({ type = "base", children }: Props) {
	// const alignment = clsx();

	let containerDom = null;
	switch (type) {
		case 'fluid':
			containerDom = <Fluid className={clsx([`${styles["container--fluid"]}`])}>{children}</Fluid>;
			break;
		case 'swipe':
			containerDom = <Swipe className={clsx([`${styles["container--swipe"]}`])}>{children}</Swipe>;
			break;
		default:
			containerDom = <div className={clsx(styles.container)}>{children}</div>;
	}

	return containerDom;
}

export default RibbonContainer;
