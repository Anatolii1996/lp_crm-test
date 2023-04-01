const Icon=({el, imgIcon, setImgIcon})=>{
return(
    <img className={`${el==imgIcon?"transparent no_select":""}`} 
    onClick={() => {
       if(el!=imgIcon){
         setImgIcon(el);
       }
     
      
    }}
   
    src={el}
  />
)
};
export default Icon;