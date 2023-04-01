const Buttons = ({ anySelectRow }) => {
  return (
    <div className="buttons_wrap">
      <span>➕</span>
      {anySelectRow && <span>✖️</span>}
    </div>
  );
};
export default Buttons;
