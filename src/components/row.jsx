import React, { useState, useEffect } from "react";

const Row = ({ id, name, isHover, setCountSelectRow, countSelectRow}) => {
  const [isRowHower, setIsRowHower] = useState(false);
  const [isRowSelect, setIsRowSelect] = useState(false);
useEffect(()=>{
if(isRowSelect){
    setCountSelectRow(countSelectRow+1);
}else{
    setCountSelectRow(countSelectRow-1);
}
}, [isRowSelect])
 

  return (
    <tr
      className="row_wrap"
      onMouseOver={() => {
        setIsRowHower(true);
      }}
      onMouseOut={() => {
        setIsRowHower(false);
      }}
      onClick={()=>{
        setIsRowSelect(!isRowSelect)
       
      }}
    >
      <td>
        <div className={`${isRowHower ? "hover_border" : isRowSelect?"hover_border":""} `}></div>
      </td>
      <td className={`${!isRowHower ? isRowSelect ? "row_select" : "" : isRowSelect ? "row_select" : "hover"}`}>
        <img src="./Untitled.png" />
      </td>
      <td className={`${!isRowHower ? isRowSelect ? "row_select" : "" : isRowSelect ? "row_select" : "hover"}`}>XXXX-</td>
      <td className={`${!isRowHower ? isRowSelect ? "row_select" : "" : isRowSelect ? "row_select" : "hover"}`}>{id}</td>
      <td className={`${!isRowHower ? isRowSelect ? "row_select" : "" : isRowSelect ? "row_select" : "hover"}`}>{name}</td>
      {isHover && <td className="delete" title="Удалить строку">
        ✖️
      </td> }
    </tr>
  );
};
export default Row;
