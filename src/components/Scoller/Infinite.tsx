import { useEffect, useState } from "react";

function ScrollInfinite() {
	const [count, setCount] = useState(0);
	const [items, setItems] = useState<string[]>([]);
	const [isFetching, setIsFetching] = useState(false);
	const [isFetchingMore, setIsFetchingMore] = useState(true);

	const fetchMore = () => {
		setItems([...items, newItem]);
		setIsFetchingMore(false);
	};

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				fetchMore();
			}
		});

		if (pageEndRef.current) {
			observer.unobserve(pageEndRef.current);
		}
	});

	return (
		<div>
			{items.map((item) => (
				<div key={item.id}>{item}</div>
			))}
			<div ref={pageEndRef}>Loading...</div>
		</div>
	);
}

export default ScrollInfinite;
