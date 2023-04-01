import React, { useState, useEffect } from "react";

const Row = ({ id, name, isHover, setCountSelectRow, countSelectRow }) => {
  const [isRowHower, setIsRowHower] = useState(false);
  const [isRowSelect, setIsRowSelect] = useState(false);
  const [isDeleteHover, setIsDeleteHover] = useState(false);
  const [isNameClicked, setIsNameClicked] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  useEffect(() => {
    if (isRowSelect) {
      setCountSelectRow(countSelectRow + 1);
    } else {
      setCountSelectRow(countSelectRow - 1);
    }
  }, [isRowSelect]);

  return (
    <tr
      className={`row_wrap ${isDeleteHover ? "transparent" : ""}`}
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
      >
        <img src="./Untitled.png" />
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
        {id}
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
          setIsNameClicked(true);
        }}
      >
        {isNameClicked ? (
          <input
            autoFocus
            className="input_name"
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        ) : (
          name
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
