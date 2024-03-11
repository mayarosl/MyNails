import { useEffect } from "react";
import { useState } from "react";

export function ListItem (){

  const [nailList, setNailList] = useState([]);
  function list(){
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish')
    .then(response => response.json())
    .then(nailList => setNailList(nailList));
  }
  useEffect(() => {
    list()
  }, []);
  console.log(nailList);
  return(
    <div>
      {nailList?.map((card) => (
        <div>
         {card.product_colors.map((nail, index)=>(
            <div key={index}>
              {nail.hex_value}
              <div style={{width:"100px", height:"100px", background:nail.hex_value}}>
              </div>
            </div>
             ))}
         </div>
       ))}
    </div>
  )
}


