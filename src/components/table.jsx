/* eslint-disable */
import React, { useState, useEffect } from "react";
import Row from "./row";
import CustomSelect from "./select";

const Table = ({
  setAnySelectRow,
  ordersArr,
  setOrdersArr,
  imgMenuOpen,
  setImgMenuOpen,
  setIdSelectedRow,
  idSelectedRow
}) => {
  const [isHover, setIsHover] = useState(false);
  const [countSelectRow, setCountSelectRow] = useState(0);
  const [clickedName, setClickedName] = useState(null);
  const [selectOption, setSelectOption] = useState([]);

  const arrName = [];
  ordersArr.forEach((el) => {
    if (arrName.indexOf(el.name) == -1) {
      arrName.push(el.name);
    }
  });

  const incrementRow = () => {
    setCountSelectRow(countSelectRow + 1);
  };
  const decrementRow = () => {
    setCountSelectRow(countSelectRow - 1);
  };

  useEffect(() => {
    if (countSelectRow > 0) {
      setAnySelectRow(true);
    } else {
      setAnySelectRow(false);
    }
  }, [countSelectRow]);

  return (
    <div
      className={`table_wrap ${isHover ? "" : "table_offset"}`}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        if (!selectOption.length) {
          setIsHover(false);
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
                <div className="select_antd">
                  <CustomSelect arrName={[]} />
                </div>
              ) : (
                <div className="space"></div>
              )}
            </td>
            <td className="product">
              <p>Товар</p>{" "}
              {isHover ? (
                <div className="select_antd">
                  <CustomSelect arrName={[]} />
                </div>
              ) : (
                <div className="space"></div>
              )}
            </td>
            <td className="id_number">
              <p>ID</p>{" "}
              {isHover ? (
                <div className="select_antd">
                  <CustomSelect arrName={[]} />
                </div>
              ) : (
                <div className="space"></div>
              )}
            </td>
            <td className="product_name">
              <p>Название</p>
              {isHover ? (
                <div className="select_antd">
                  <CustomSelect
                    arrName={arrName}
                    setSelectOption={setSelectOption}
                  />
                </div>
              ) : (
                <div className="space"></div>
              )}
            </td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {(() => {
            if (ordersArr && !selectOption.length) {
              
              return ordersArr.map((el) => {
                return (
                  <Row
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    icon={el.icons}
                    isHover={isHover}
                    setOrdersArr={setOrdersArr}
                    ordersArr={ordersArr}
                    imgMenuOpen={imgMenuOpen}
                    setImgMenuOpen={setImgMenuOpen}
                    incrementRow={incrementRow}
                    decrementRow={decrementRow}
                    setClickedName={setClickedName}
                    clickedName={clickedName}
                    setIdSelectedRow={setIdSelectedRow}
                    idSelectedRow={idSelectedRow}
                  />
                );
              });
            } else if (ordersArr && selectOption.length) {
              return ordersArr
                .filter((el) => selectOption.includes(el.name))
                .map((el) => {
                  return (
                    <Row
                      key={el.id}
                      id={el.id}
                      name={el.name}
                      icon={el.icons}
                      isHover={isHover}
                      setOrdersArr={setOrdersArr}
                      ordersArr={ordersArr}
                      imgMenuOpen={imgMenuOpen}
                      setImgMenuOpen={setImgMenuOpen}
                      incrementRow={incrementRow}
                      decrementRow={decrementRow}
                      setClickedName={setClickedName}
                      clickedName={clickedName}
                    />
                  );
                });
            }
          })()}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
