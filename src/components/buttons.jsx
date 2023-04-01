const Buttons = ({ anySelectRow, addNewOrder }) => {
  return (
    <div className="buttons_wrap">
      <span onClick={()=>{addNewOrder()}}>➕</span>
      {anySelectRow && <span>✖️</span>}
    </div>
  );
};
export default Buttons;
