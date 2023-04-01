const Images = () => {
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
    
  ];
  return(
<div className="icons_menu">
{imageURL.map((el)=>{
    return(
        <img src={el}  />
    )
})}
</div>
  )
};
export default Images;
