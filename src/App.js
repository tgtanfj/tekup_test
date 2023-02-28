import './App.css';
import Card from './Components/Card/Card';
import React, { useState } from 'react';
import data from './data';

function App() {
  const [active, setActive] = useState("1")
  return (
    <div className='container'>
      <div className='buttons'>
        <button onClick={() => setActive("1")}>All</button>
        <button onClick={() => setActive("2")}>Manpower Supply</button>
        <button onClick={() => setActive("3")}>Mobile App / Websites</button>
        <button onClick={() => setActive("4")}>UI/UX Des2ign</button>
      </div>
      <div>
        {active === "1" && <Card data={data} cardIndex={0} title='1' />}
        {active === "2" && <Card data={data} cardIndex={1} title='2' />}
        {active === "3" && <Card data={data} cardIndex={2} title='3' />}
        {active === "4" && <Card data={data} cardIndex={3} title='4' />}
      </div>
    </div>
  );
}

export default App;
