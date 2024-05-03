import { Avatar, Button, ButtonLink, Card, Grid, List, Progress } from "@/components";
import { RibbonContainer } from "@/container";
import { FilterableProduct, Profile } from "@/features";
import { useWindowResize } from "@/hooks";
import React, { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

const users = [
	{
		id: 1,
		fullName: "Jackie Dao",
		nickName: "JD",
		avatar: "https://i.imgur.com/yXOvdOSs.jpg",
		avatarSize: 90,
		info: [
			{
				id: 1,
				label: "email",
				value: "daoxuannhut@gmail.com",
				isPrimary: true,
			},
			{
				id: 1,
				label: "email",
				value: "daoxuannhut@gmail.com",
				isPrimary: false,
			},
			{ id: 1, label: "phone", value: "0123456789", isPrimary: true },
			{ id: 1, label: "phone", value: "0123456789", isPrimary: false },
			{
				id: 1,
				label: "address",
				value: "Ho Chi Minh, Viet Nam",
				isPrimary: true,
			},
			{ id: 1, label: "DOB", value: "01/01/2000" },
			{
				id: 1,
				label: "description",
				value:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			},
		],
	},
	{
		id: 2,
		fullName: "Jackie Dao",
		nickName: "JD",
		avatar: "https://i.imgur.com/yXOvdOSs.jpg",
		avatarSize: 90,
		info: null,
	},
];

const products = [
	{ title: "Cabbage", isFruit: false, id: 1 },
	{ title: "Garlic", isFruit: false, id: 2 },
	{ title: "Apple", isFruit: true, id: 3 },
];

// function Square({ value, onClick }: squareProps) {
//   return <Button className="button" label={value} onClick={onClick} />
// }

const PRODUCTS_LIST = [
	{ category: "Fruits", price: "$1", stocked: true, name: "Apple" },
	{ category: "Fruits", price: "$1", stocked: true, name: "Dragon fruit" },
	{ category: "Fruits", price: "$2", stocked: false, name: "Passion fruit" },
	{ category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
	{ category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
	{ category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const { width } = useWindowResize();
	let listViewMobile: string;
	let content: string;

	if (width < 768) {
		listViewMobile = "list list__item--mobile";
	} else {
		listViewMobile = "list";
	}

	useEffect(() => {
		setIsLoggedIn();
	}, []);

	if (isLoggedIn) {
		content = "Is Login";
	} else {
		content = <Button label={"Login"} title="Click to login" />;
	}
	const [count, setCount] = useState(0);

	return (
		<ErrorBoundary fallback={<p>Something went wrong. Try again later.</p>}>
			<RibbonContainer type="fluid">
				<div className="card">
					<Button
						onClick={() => setCount((count) => count + 1)}
						label={`Count is ${count}`}
						size={"large"}
						hollow
						title="click to count"
					/>
				</div>
				<List className={`${listViewMobile}`} itemClassName="list__item" data={products} />
				{/* <Board cols={16} rows={22} /> */}
				{/* <FilterableProduct products={products} /> */}
				<FilterableProduct products={PRODUCTS_LIST} />
				{users && (
					<RibbonContainer>
						<Grid cols={4}>
							{users.map((user) => (
								<Profile key={user.id} profileData={user} />
							))}
						</Grid>
					</RibbonContainer>
				)}
			</RibbonContainer>
		</ErrorBoundary>
	);
}

export default App;
