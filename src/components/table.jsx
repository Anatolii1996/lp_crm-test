import React, { useState, useEffect } from "react";
import Row from "./row";

const Table = ({ setAnySelectRow, ordersArr, setOrdersArr }) => {

  const [isHover, setIsHover] = useState(false);
  const [countSelectRow, setCountSelectRow] = useState(1);

  const [imgMenuOpen, setImgMenuOpen] = useState(false);

  useEffect(()=>{
if(countSelectRow>0){
  setAnySelectRow(true)
}else{
  setAnySelectRow(false)
}
  }, [countSelectRow])

  return (
    <div
      className={`table_wrap ${isHover ? "" : "table_offset"}`}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
      onClick={()=>{
        if(imgMenuOpen){
          setImgMenuOpen(false);
     }
      }}
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
                   
                  <option></option>
                    {ordersArr.map((el)=>{
                      return(
                        
                        <option key={el.id}>{el.name}</option>
                      )
                    })}
                    
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
          {ordersArr&&ordersArr.map((el) => {
            return (
              <Row
                key={el.id}
                id={el.id}
                name={el.name}
                icon={el.icons}
                isHover={isHover}
                countSelectRow={countSelectRow}
                setCountSelectRow={setCountSelectRow}
                setOrdersArr={setOrdersArr}
                ordersArr={ordersArr}
                imgMenuOpen={imgMenuOpen}
                setImgMenuOpen={setImgMenuOpen}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
