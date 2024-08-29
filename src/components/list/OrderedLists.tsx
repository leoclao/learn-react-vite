import type { OrderedListType } from "@/types/type";
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
	type?: OrderedListType;
	start?: number | string | undefined;
	data: Array<DataItem>;
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

	const startNumber = typeof start === 'string' ? Number.parseInt(start, 10) : start;

	const items = data.map((item) => (
		item.title ? (
			<ListItem key={item.id} id={item.id} className={itemClassName}>
				{item.title}</ListItem>
		) : null
	));

	return (
		<ol type={type} start={startNumber} className={className}>
			{items}
		</ol>
	);
}

export default OrderedLists;
