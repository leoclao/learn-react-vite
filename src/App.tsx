import React, { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Avatar from './components/avatar';
import Button from './components/button';
import List from './components/list';

const user = {
  name: 'Leo Dao',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let content;

  useEffect(() => {
    setIsLoggedIn()
  }, [isLoggedIn]);

  if(isLoggedIn){
    content = 'Is Login';
  } else {
    content = <Button label={`Login`} title="Click to login" />;
  }
  const [count, setCount] = useState(0);

  return (
    <>
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
        <Button onClick={() => setCount((count) => count + 1)} label={`Count is ${count}`} title="click to count"/>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>Welcome to my app</h1> */}
      {content}
      <Avatar title={user.name} src={user.imageUrl} alt={user.name} />
      <List className="list" itemClassName="list__item" data={products} />
    </>
  )
}

export default App
