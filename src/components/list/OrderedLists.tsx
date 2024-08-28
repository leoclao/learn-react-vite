/**
 * The function OrderedLists renders an ordered list component in React with customizable styling and
 * data mapping.
 * @param {Props}  - 1. `className`: Optional CSS class name for the `<ol>` element.
 * @returns The `OrderedLists` component is being returned. It takes in props such as className,
 * itemClassName, type, start, and data, and renders an ordered list (`<ol>`) with list items
 * (`<ListItem>` components) based on the data provided. If the data is null or undefined, an error
 * message is logged to the console.
 */
import type { OrderedListType } from "@/utils";
import ListItem from "./ListItem";

interface Props {
	className?: string;
	itemClassName?: string;
	type?: OrderedListType;
	start?: number | string;
	data: Array;
}

function OrderedLists({
	className,
	itemClassName,
	type = "1",
	start,
	data,
}: Props) {
	if (data === null || data === undefined) {
		return console.error("List is not null or undefined");
	}

	const items = data.map((item) => (
		<ListItem key={item.id} id={item.id} className={itemClassName}>
			{item.title}
		</ListItem>
	));

	return (
		<ol type={type} start={start} className={className}>
			{items}
		</ol>
	);
}

export default OrderedLists;
