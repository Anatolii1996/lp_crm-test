const Row = ({ id, name }) => {
  return (
    <tr className="row_wrap">
      <td>
        <img src="./Untitled.png" />
      </td>
      <td>XXXX-</td>
      <td className="id_number">{id}</td>
      <td className="order_name">{name}</td>
    </tr>
  );
};
export default Row;
