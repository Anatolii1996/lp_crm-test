import React, { useState } from "react";

const Table = () => {
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

  const [isHover, setIsHover] = useState(false);

  return (
    <div className="table_wrap" onMouseOver={()=>{
        setIsHover(true)
      }} onMouseLeave={()=>[
        setIsHover(false)
      ]}>
      <table>
        <thead>
          <tr className="table_wrap_header">
            <td>Статус</td>
            <td>Товар</td>
            <td>ID</td>
            <td>Название</td>
          </tr>
        </thead>
        <tbody>
          {orders.map((el) => {
            return (
              <tr key={el.id}>
                <td>
                  <img src="./Untitled.png" />
                </td>
                <td>XXXX-</td>
                <td>{el.id}</td>
                <td className="order_name">{el.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
