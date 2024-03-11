import { List } from "antd";
import { useEffect, useState } from "react";

interface NailPolish {
  id: string; 
  brand: string;
  product_colors: ProductColor[];
}

interface ProductColor {
  hex_value: string;
  colour_name?: string; 
}


export function ListItem() {
  const [nailList, setNailList] = useState<NailPolish[]>([]); 

  function list() {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish')
      .then(response => response.json())
      .then((data: NailPolish[]) => setNailList(data)); 
  }

  useEffect(() => {
    list();
  }, []);

console.log(nailList);

  return (
    <div>
      <List
        dataSource={nailList}
        renderItem={(item: NailPolish) => (
          <List.Item
          extra={<img 
          width={272}
          alt="logo"
          style={{backgroundColor: item.product_colors,  width: "100px",  height: "100px"  }}
        />}>
            {item.brand}
            
          </List.Item>
        )}
      />
      {nailList.map((card) => (
        <div key={card.id}> 
          {card.product_colors.map((nail, index) => (
            <div key={index}>
              {nail.colour_name}
              <div style={{ width: "100px", height: "100px", background: nail.hex_value }}>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}