import { useCallback, useEffect, useRef, useState } from "react";

type Item = {
	id: number;
	name: string;
}
function ScrollInfinite() {
	// const [count, setCount] = useState(0);
	const [items, setItems] = useState<Item[]>([]);
	// const [isFetching, setIsFetching] = useState(false);
	const [isFetchingMore, setIsFetchingMore] = useState(true);
	const pageEndRef = useRef<HTMLDivElement | null>(null);

	const fetchMore = useCallback(() => {
		const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` };
		setItems((prevItems) => [...prevItems, newItem]);
		setIsFetchingMore(false);
	}, [items.length]);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setIsFetchingMore(true);
			}
		});

		if (pageEndRef.current) {
			observer.observe(pageEndRef.current);
		}

		return () => {
			if(pageEndRef.current) {
				observer.unobserve(pageEndRef.current);
			}
		}
	}, []);

	useEffect(() => {
		if (isFetchingMore) {
			fetchMore();
		}
	}, [isFetchingMore, fetchMore])

	return (
		<div>
			{items.map((item) => (
				<div key={item.id}>{item.name}</div>
			))}
			<div ref={pageEndRef}>Loading...</div>
		</div>
	);
}

export default ScrollInfinite;
