import { Button, ButtonLink, Card, DescLists, Grid, List, Masonry, Message, Progress, Thumb, UnorderedLists } from "@/components";
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
		avatar: [
			{
				domain: "https://fastly.picsum.photos",
				directory: "id",
				id: "0",
				name: "3333",
				size: "5000",
				format: "jpg",
				query: {
					hmac: "_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
				},
			}
		],
		avatarSize: "large",
		avatarRatio: "1x1",
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
		fullName: "JD",
		nickName: "JD",
		// avatar: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
		avatar: [{
			// https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68
			domain: "https://fastly.picsum.photos/",
			directory: "id",
			id: "10",
			name: "1667",
			size: "2500",
			format: "jpg",
			query: {
				hmac: "J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
			},
		}],
		avatarSize: "large",
		info: null,
		avatarRatio: "16x9",
	},
	// {
	// 	id: 3,
	// 	fullName: "Nhut Dao",
	// 	nickName: "JD",
	// 	avatar: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
	// 	avatarSize: "large",
	// 	info: null,
	// 	avatarRatio: "1x1",
	// },
	// {
	// 	id: 4,
	// 	fullName: "Nhut",
	// 	nickName: "JD",
	// 	avatar: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
	// 	avatarSize: "large",
	// 	info: null,
	// 	avatarRatio: "9x16",
	// },
	// {
	// 	id: 5,
	// 	fullName: "Dao",
	// 	nickName: "JD",
	// 	avatar: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
	// 	avatarSize: "large",
	// 	info: null,
	// 	avatarRatio: "1x1",
	// },
];

const products = [
	{ title: "Cabbage", isFruit: false, id: 1, describes: "Cabbage describes" },
	{ title: "Garlic", isFruit: false, id: 2, describes: "Garlic describes" },
	{ title: "Apple", isFruit: true, id: 3, describes: "Apple describes" },
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
				{/* Demo list */}
				<UnorderedLists
					// className={`${listViewMobile}`}
					// marker="square"
					itemClassName="list__item"
					data={products}
				/>
				<Message types="error" size="small" content="Message demo" />
				<Progress value={50} size="large" />
				{/* Demo Progress */}
				<FilterableProduct products={PRODUCTS_LIST} />
				<Thumb className="Thumb" isHideFigCap src="https://i.imgur.com/yXOvdOSs.jpg" desc="Desc" title="Desc" />
				{users && (
					<RibbonContainer>
						<Grid cols={4} gap={2}>
							{users.map((user) => (
								<Profile key={user.id} profileData={user} />
							))}
						</Grid>
						{/* <Masonry cols={2} gap={4}>
							{users.map((user) => (
								<Profile key={user.id} profileData={user} />
							))}
						</Masonry> */}
					</RibbonContainer>
				)}
			</RibbonContainer>
		</ErrorBoundary>
	);
}

export default App;
