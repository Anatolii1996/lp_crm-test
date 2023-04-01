import React, { useState } from "react";

const Row = ({ id, name, isHover }) => {
  const [isRowHower, setIsRowHower] = useState(false);

  return (
    <tr
      className="row_wrap"
      onMouseOver={() => {
        setIsRowHower(true);
      }}
      onMouseOut={() => {
        setIsRowHower(false);
      }}
    >
      <td>
        <div className={isRowHower ? `hover_border` : ""}></div>
      </td>
      <td className={isRowHower ? "hover" : ""}>
        <img src="./Untitled.png" />
      </td>
      <td className={isRowHower ? "hover" : ""}>XXXX-</td>
      <td className={`id_number ${isRowHower ? "hover" : ""}`}>{id}</td>
      <td className={`product_name ${isRowHower ? "hover" : ""}`}>{name}</td>
      {isHover ? <td>
        <img src="./x.png"  />
      </td> : null}
    </tr>
  );
};
export default Row;
