const Buttons = ({ anySelectRow, addNewOrder, setOrdersArr, ordersArr }) => {
  return (
    <div className="buttons_wrap">
      <span onClick={()=>{addNewOrder()}}>➕</span>
      {anySelectRow && <span>✖️</span>}
    </div>
  );
};
export default Buttons;
