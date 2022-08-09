import React from "react";
import "./style.css";

function ItemCount({stock}) {
  const [clicks, setClicks] = React.useState(1);

  const sumarProd = () => {
    if (clicks < stock){
      setClicks(clicks + 1)
    }
  };

  const restarProd = () => {
      if (clicks > 0){
        setClicks(clicks - 1)
      }   
  };

  const onAdd = () => {
    console.log("Producto agregado")
  };

  return (
    <div className="contador">
      <button onClick={restarProd}> - </button>
      <p>{clicks}</p>
      <button onClick={sumarProd}> + </button>
      <button onClick={onAdd}>Agregar</button>
    </div>
  );
}

export default ItemCount;