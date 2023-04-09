import React, { useState, useEffect } from "react";
import Images from "./images";
import { BsTruck } from "react-icons/bs";

const Row = ({
  id,
  name,
  isHover,
  incrementRow,
  decrementRow,
  setOrdersArr,
  ordersArr,
  icon,
  imgMenuOpen,
  setImgMenuOpen,
  setClickedName,
  clickedName,
  setIdSelectedRow,
}) => {
  const [elId] = useState(id);
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
    if(isRowSelect){
      setIdSelectedRow((prev)=>[...prev, id])
    }else{
      setIdSelectedRow(prev => prev.filter(el => el !== id));
    }

  }, [isRowSelect])

  useEffect(() => {
    if (!isRowSelect && !isRowHower) {
      setIsNameClicked(false);
    }
  }, [isRowHower, isRowSelect]);

  useEffect(() => {
    if (clickedName == id) {
      setIsNameClicked(true);
      setImgMenuOpen(true);
    } else {
      setIsNameClicked(false);
    }
  }, [clickedName]);

  useEffect(() => {
    setIsNameClicked(false);
  }, [rowDisabled]);

  const changeName = (e) => {
    if (e.keyCode === 13) {
      setOrdersArr([
        {
          id: idVal,
          icons: imgIcon,
          name: nameVal,
        },
        ...ordersArr,
      ]);
    }
  };

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
        if (isRowSelect) {
          decrementRow();
        } else {
          incrementRow();
        }
        setIsRowSelect(!isRowSelect);
      }}
    >
      <td>
        <div
          className={`${isRowHower || isRowSelect ? "hover_border" : ""} `}
        ></div>
      </td>
      <td
        className={`img_wrap ${
          !isRowHower
            ? isRowSelect
              ? "row_select"
              : ""
            : isRowSelect
            ? "row_select"
            : "hover"
        }`}
        onClick={(e) => {
          e.stopPropagation();
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
                setImgMenuOpen(true);
              }
            }}
            onChange={(e) => {
              setIdVal(e.target.value);
            }}
          />
        )}
      </td>
      <td
        className={` ${
          !isRowHower
            ? isRowSelect
              ? "row_select"
              : ""
            : isRowSelect
            ? "row_select"
            : "hover"
        }`}
        onClick={() => {
          setClickedName(id);
        }}
      >
        {(() => {
          if (!inputValue) {
            return (
              <div className="icon_name_wrap">
                <img src={imgIcon} />
                <input
                  id="input_name"
                  className="input_name"
                  type="text"
                  tabIndex={2}
                  onChange={(e) => {
                    setNameVal(e.target.value);
                  }}
                  onKeyDown={changeName}
                />
                {imgMenuOpen && (
                  <Images key={id} setImgIcon={setImgIcon} imgIcon={imgIcon} />
                )}
              </div>
            );
          } else if (rowDisabled) {
            return (
              <div className="icon_name_wrap">
                <img src={imgIcon} />
                <p>{inputValue}</p>
              </div>
            );
          } else if (isNameClicked && !rowDisabled) {
            return (
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
                  onKeyDown={changeName}
                />
                {imgMenuOpen && (
                  <Images key={id} setImgIcon={setImgIcon} imgIcon={imgIcon} />
                )}
              </div>
            );
          } else {
            return (
              <div className="icon_name_wrap">
                <img src={imgIcon} />
                <p>{inputValue}</p>
              </div>
            );
          }
        })()}
      </td>
      {isHover && !rowDisabled && (
        <td
          className="delete"
          title="Удалить строку"
          onMouseOver={() => {
            setIsDeleteHover(true);
          }}
          onMouseOut={() => {
            setIsDeleteHover(false);
          }}
          onClick={(e) => {
            e.stopPropagation();
            setOrdersArr(ordersArr.filter((el) => el.id != elId));
          }}
        >
          ✖️
        </td>
      )}
    </tr>
  );
};
export default Row;
