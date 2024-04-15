import React, { useState, useEffect } from "react";
import { info } from "sass";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Avatar from "./components/avatar";
import Button from "./components/button";
import Grid from "./components/grid";
import List from "./components/list";
import Container from "./container";
import FilterableProduct from "./features/product";
import Profile from "./features/profile";
// import Board from './components/board';

// interface squareProps {
//   value?: string;
//   onClick?: React.MouseEventHandler<HTMLElement>;
// }

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
	let content: string;

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
		<Container type="FLUID">
			{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
			<div className="card">
				<Button
					onClick={() => setCount((count) => count + 1)}
					label={`Count is ${count}`}
					title="click to count"
				/>
				{/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
			</div>
			{/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>Welcome to my app</h1> */}
			{content}
			{/* <Avatar title={user.name} src={user.imageUrl} alt={user.name} /> */}
			<List className="list" itemClassName="list__item" data={products} />
			{/* <Board cols={16} rows={22} /> */}
			{/* <FilterableProduct products={products} /> */}
			<FilterableProduct products={PRODUCTS_LIST} />
			{users && (
				<Container>
					<Grid cols={4}>
						{users.map((user) => (
							<Profile key={user.id} profileData={user} />
						))}
					</Grid>
				</Container>
			)}
		</Container>
	);
}

export default App;
