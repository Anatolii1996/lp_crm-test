const Buttons = ({ anySelectRow, addNewOrder, setOrdersArr, ordersArr, idSelectedRow }) => {
  return (
    <div className="buttons_wrap">
      <span onClick={()=>{addNewOrder()}}>➕</span>
      {anySelectRow && <span onClick={()=>{
        if(idSelectedRow.length){
          setOrdersArr(ordersArr.filter((el)=>!idSelectedRow.includes(el.id)))
        }
      }}>✖️</span>}
    </div>
  );
};
export default Buttons;
