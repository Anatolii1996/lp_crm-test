/* eslint-disable */

import Icon from "./icon";

const Images = ({ setImgIcon, imgIcon}) => {
  const imageURL = [
    "./icons/Amazon.png",
    "./icons/Autolux.png",
    "./icons/Ebay.png",
    "./icons/flag.png",
    "./icons/Modna kasta.png",
    "./icons/Meest express.png",
    "./icons/Fotos.png",
    "./icons/Group 80.png",
    "./icons/Group 81.png",
    "./icons/Group.png",
    "./icons/Vector (3).png",
  ];
  return (
    <div className="icons_menu" onClick={(e)=>e.stopPropagation()}>
      {imageURL.map((el) => {
        return (
         <Icon key={el} el={el} imgIcon={imgIcon} setImgIcon={setImgIcon}/>
        );
      })}
    </div>
  );
};
export default Images;
