import React, { useState } from 'react';
import './App.scss';
import Buttons from './components/buttons';
import Table from './components/table';

function App() {
  const [anySelectRow, setAnySelectRow] = useState(false);
  const orders = [
    {
      id: 1,
      name: "Синий",
    },
    {
      id: 2,
      name: "39-й размер",
    },
    {
      id: 32,
      name: "39,5 размер",
    },
    {
      id: 65,
      name: "40-й размер",
    },
    {
      id: 4,
      name: "41-размер",
    },
    {
      id: 134,
      name: "8GB",
    },
    {
      id: 7,
      name: "16GB",
    },
    {
      id: 98,
      name: "32GB",
    },
    {
      id: 6,
      name: "Space grey",
    },
    {
      id: 56,
      name: "Rose gold",
    },
    {
      id: 78,
      name: "Silver",
    },
    {
      id: 135,
      name: "Silver",
    },
  ];
  const [ordersArr, setOrdersArr] = useState(orders)
  
  const addNewOrder=()=>{
    setOrdersArr([{id:"", name:""},...ordersArr])
  }

  return (
    <div className="App" >
      <Table setAnySelectRow={setAnySelectRow} ordersArr={ordersArr} />
      <Buttons anySelectRow={anySelectRow} addNewOrder={addNewOrder}/>
    </div>
  );
}

export default App;
