import styles from "@/styles/modules/lists.module.scss";
import type { UnorderedListMarker } from "@/types/type";
import clsx from "clsx";
import ListItem from "./ListItem";

interface DataItem {
	id: string;
	term?: string;
	title?: string;
	describes: string;
}

interface Props {
	className?: string;
	itemClassName?: string;
	marker: UnorderedListMarker;
	data: Array<DataItem>;
}

function UnorderedLists({
	className,
	itemClassName,
	marker = "none",
	data,
}: Props) {
	if (data === null || data === undefined) {
		return console.error("List is not null or undefined");
	}

	let markerType = "";
	switch (marker) {
		case "disc":
			markerType = "Disc";
			break;
		case "circle":
			markerType = "Circle";
			break;
		case "square":
			markerType = "Square";
			break;
		default:
			markerType = "None";
			break;
	}

	const items = data.map((item) => (
		<ListItem key={item.id} className={itemClassName}>
			{item.title}
		</ListItem>
	));

	return (
		<ul
			className={clsx(markerType && styles[`Marker${markerType}`], className)}
		>
			{items}
		</ul>
	);
}

export default UnorderedLists;
