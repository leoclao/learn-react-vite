/**
 * The UnorderedLists component in TypeScript React renders an unordered list with specified markers
 * and list items.
 * @param {Props}  - The `UnorderedLists` component you provided is a React functional component that
 * renders an unordered list based on the provided data array. Here is an explanation of the
 * parameters:
 * @returns The `UnorderedLists` component is being returned. It takes in props such as className,
 * itemClassName, marker, and data, and renders an unordered list (`<ul>`) with list items (`<li>`)
 * based on the data provided. The marker type for the list items is determined based on the value of
 * the `marker` prop. The component also handles cases where the data is
 */
import styles from "@/styles/modules/lists.module.scss";
import type { UnorderedListMarker } from "@/utils";
import clsx from "clsx";
import ListItem from "./ListItem";

interface Props {
	className?: string;
	itemClassName?: string;
	marker: UnorderedListMarker;
	data: Array;
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
