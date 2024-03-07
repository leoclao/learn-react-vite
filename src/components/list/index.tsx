interface Props {
	className?: string;
	itemClassName?: string;
	data: Array;
}

function List({ className, itemClassName, data }: Props) {
	if (data === null || data === undefined) {
		return console.error("List is not null or undefined");
	}

	const items = data.map((item) => (
		<li key={item.id} className={itemClassName}>
			{item.title}
		</li>
	));

	return <ul className={className}>{items}</ul>;
}

export default List;
