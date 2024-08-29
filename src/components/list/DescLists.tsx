import DescItem from "./DescItem";

interface DataItem {
	id: string;
	term?: string;
	title?: string;
	describes: string;
}

interface Props {
	className?: string;
	itemClassName?: string;
	data: Array<DataItem>;
}

function DescLists({ className, itemClassName, data }: Props) {
	if (data === null || data === undefined) {
		return console.error("List is not null or undefined");
	}

	const items = data.map((item) => (
		<DescItem
			key={item.id}
			id={item.id}
			className={itemClassName}
			term={item.term || item.title}
			describes={item.describes}
		/>
	));

	return <dl className={className}>{items}</dl>;
}

export default DescLists;
