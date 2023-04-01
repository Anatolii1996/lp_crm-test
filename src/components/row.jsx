import React, { useState, useEffect } from "react";
import Images from "./images";

const Row = ({
  id,
  name,
  isHover,
  setCountSelectRow,
  countSelectRow,
  setOrdersArr,
  ordersArr,
  icon,
  imgMenuOpen,
  setImgMenuOpen
}) => {
  const [isRowHower, setIsRowHower] = useState(false);
  const [isRowSelect, setIsRowSelect] = useState(false);
  const [isDeleteHover, setIsDeleteHover] = useState(false);
  const [isNameClicked, setIsNameClicked] = useState(false);
  const [inputValue, setInputValue] = useState(name);
  const [rowDisabled, setRowDisabled] = useState(false);

  const [idVal, setIdVal] = useState("");
  const [nameVal, setNameVal] = useState("");


  const [imgIcon, setImgIcon] = useState(icon);

  useEffect(()=>{
    setImgMenuOpen(false)
  }, [imgIcon])

  useEffect(() => {
    setIsNameClicked(false);
  }, [rowDisabled]);

  useEffect(() => {
    if (isRowSelect) {
      setCountSelectRow(countSelectRow + 1);
    } else {
      setCountSelectRow(countSelectRow - 1);
    }
  }, [isRowSelect]);


  return (
    <tr
      className={`row_wrap ${
        isDeleteHover || rowDisabled ? "transparent" : ""
      } `}
      onMouseOver={() => {
        setIsRowHower(true);
      }}
      onMouseOut={() => {
        setIsRowHower(false);
      }}
      onClick={() => {
        setIsRowSelect(!isRowSelect);
       
       
      }}
    >
      <td>
        <div
          className={`${
            isRowHower ? "hover_border" : isRowSelect ? "hover_border" : ""
          } `}
        ></div>
      </td>
      <td
        className={`${
          !isRowHower
            ? isRowSelect
              ? "row_select"
              : ""
            : isRowSelect
            ? "row_select"
            : "hover"
        }`}
        onClick={() => {
          setRowDisabled(!rowDisabled);
        }}
      >
        <img src={rowDisabled ? "./Frame 88.png" : "./Untitled.png"} />
      </td>
      <td
        className={`${
          !isRowHower
            ? isRowSelect
              ? "row_select"
              : ""
            : isRowSelect
            ? "row_select"
            : "hover"
        }`}
      >
        XXXX-
      </td>
      <td
        className={`${
          !isRowHower
            ? isRowSelect
              ? "row_select"
              : ""
            : isRowSelect
            ? "row_select"
            : "hover"
        }`}
      >
        {id ? (
          id
        ) : (
          <input
            className="input_id"
            type="text"
            autoFocus
            maxLength={3}
            tabIndex={1}
            onKeyDown={(e) => {
              if (e.keyCode == 13) {
                document.querySelector("#input_name").focus();
              }
            }}
            onChange={(e) => {
              setIdVal(e.target.value);
            }}
          />
        )}
      </td>
      <td
        className={`name_order ${
          !isRowHower
            ? isRowSelect
              ? "row_select"
              : ""
            : isRowSelect
            ? "row_select"
            : "hover"
        }`}
        onClick={() => {
          setIsNameClicked(true);
          setImgMenuOpen(true);
        }}
      >
        {!inputValue ? (
          <div className="icon_name_wrap">
            <img src="./icons/Group.png" />
            <input
              id="input_name"
              className="input_name"
              type="text"
              tabIndex={2}
              onChange={(e) => {
                setNameVal(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  setOrdersArr([
                    { id: idVal, icons: "./icons/Group.png", name: nameVal },
                    ...ordersArr,
                  ]);
                }
              }}
            />
          </div>
        ) : rowDisabled ? (
          <div className="icon_name_wrap">
            <img src={imgIcon} />
            <input type="text" className="input_name" value={inputValue} />
          </div>
        ) : isNameClicked ? (
          <div className="icon_name_wrap">
            <img src={imgIcon} />
            <input
              autoFocus
              className="input_name"
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            {imgMenuOpen && <Images  setImgIcon={setImgIcon} imgIcon={imgIcon}/>}
          </div>
        ) : (
          <div className="icon_name_wrap">
            <img src={imgIcon} />
            <input type="text" className="input_name" value={inputValue} />
          </div>
        )}
      </td>
      {isHover && (
        <td
          className="delete"
          title="Удалить строку"
          onMouseOver={() => {
            setIsDeleteHover(true);
          }}
          onMouseOut={() => {
            setIsDeleteHover(false);
          }}
        >
          ✖️
        </td>
      )}
    </tr>
  );
};
export default Row;
