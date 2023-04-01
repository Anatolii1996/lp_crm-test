import React, { useState } from "react";
import Row from "./row";

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
    <div
      className={`table_wrap ${isHover?"":"table_offset"}`}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {setIsHover(false)}}
    >
      <table>
        <thead>
          <tr className="table_wrap_header">
            <td></td>
            <td className="status">
              <p>Статус</p>{" "}
              {isHover ? (
                <div className="select">
                  <select>
                    <option selected></option>
                    
                  </select>
                </div>
              ) : (
                <div className="space"></div>
              )}
            </td>
            <td className="product">
              <p>Товар</p>{" "}
              {isHover ? (
                <div className="select">
                  <select>
                    <option selected></option>
                   
                  </select>
                </div>
              ) : (
                <div className="space"></div>
              )}
            </td>
            <td className="id_number">
              <p>ID</p>{" "}
              {isHover ? (
                <div className="select">
                  <select>
                    <option selected></option>
                    
                  </select>
                </div>
              ) : (
                <div className="space"></div>
              )}
            </td>
            <td className="product_name">
              <p>Название</p>
              {isHover ? (
                <div className="select">
                  <select >
                    <option selected></option>
                    <option>синий</option>
                    <option>красный</option>
                  </select>
                </div>
              ) : (
                <div className="space"></div>
              )}
            </td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {orders.map((el) => {
            return (
             <Row key={el.id} id={el.id} name={el.name} isHover={isHover}/>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
