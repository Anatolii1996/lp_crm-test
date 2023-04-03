import React, { useState, useEffect } from "react";
import Images from "./images";

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

  useEffect(() => {
    setImgMenuOpen(false);
  }, [imgIcon]);

  useEffect(() => {
    setIsNameClicked(false);
  }, [rowDisabled]);

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
          setIsNameClicked(true);
          setImgMenuOpen(true);
        }}
      >
        {(() => {
          if (!inputValue) {
            return (
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
                        {
                          id: idVal,
                          icons: "./icons/Group.png",
                          name: nameVal,
                        },
                        ...ordersArr,
                      ]);
                    }
                  }}
                />
              </div>
            );
          } 
          else if (rowDisabled) {
            return (
              <div className="icon_name_wrap">
                <img src={imgIcon} />
                <p>{inputValue}</p>
              </div>
            );
          } 
          else if (isNameClicked) {
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
      {isHover&&!rowDisabled && (
        <td
          className="delete"
          title="Удалить строку"
          onMouseOver={() => {
            setIsDeleteHover(true);
          }}
          onMouseOut={() => {
            setIsDeleteHover(false);
          }}
          onClick={() => {
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
