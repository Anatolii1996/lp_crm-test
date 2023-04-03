import React, { useState } from 'react';
import './App.scss';
import Buttons from './components/buttons';
import Table from './components/table';

function App() {
  const [anySelectRow, setAnySelectRow] = useState(false);
  const [imgMenuOpen, setImgMenuOpen] = useState(false);
  const orders = [
    {
      id: 1,
      icons: "./icons/Group.png",
      name: "Синий",
    },
    {
      id: 2,
      icons: "./icons/Group.png",
      name: "39-й размер",
    },
    {
      id: 32,
      icons: "./icons/Vector (3).png",
      name: "39,5 размер",
    },
    {
      id: 65,
      icons: "./icons/Vector (3).png",
      name: "40-й размер",
    },
    {
      id: 4,
      icons: "./icons/Vector (3).png",
      name: "41-размер",
    },
    {
      id: 134,
      icons: "./icons/Vector (3).png",
      name: "8GB",
    },
    {
      id: 7,
      icons: "./icons/Group.png",
      name: "16GB",
    },
    {
      id: 98,
      icons: "./icons/Group.png",
      name: "32GB",
    },
    {
      id: 6,
      icons: "./icons/Group.png",
      name: "Space grey",
    },
    {
      id: 56,
      icons: "./icons/Group.png",
      name: "Rose gold",
    },
    {
      id: 78,
      icons: "./icons/Group.png",
      name: "Silver",
    },
    {
      id: 135,
      icons: "./icons/Group.png",
      name: "Silver",
    },
  ];
  const [ordersArr, setOrdersArr] = useState(orders)

  const addNewOrder = () => {
    setOrdersArr([{ id: "", icons: "./icons/Group.png", name: "" }, ...ordersArr])
  }

  return (
    <div className="App"  onClick={()=>{
      if(imgMenuOpen){
        setImgMenuOpen(false);
   }
    }}>
      <Table setAnySelectRow={setAnySelectRow} ordersArr={ordersArr} setOrdersArr={setOrdersArr} imgMenuOpen={imgMenuOpen}
        setImgMenuOpen={setImgMenuOpen} />
      <Buttons anySelectRow={anySelectRow} addNewOrder={addNewOrder} />
    </div>
  );
}

export default App;
