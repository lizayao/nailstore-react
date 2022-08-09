import React from "react";
import "./style.css"

function ItemCount(props) {
  const [clicks, setClicks] = React.useState(1);

  const sumarProd = () => {
    //condicion q el click no supere el stock
    setClicks(clicks + 1)
    /* (clicks = stock) ? (setClicks(clicks+1)) : setClicks(clicks+0) */
  };

  const restarProd = () => {
    setClicks(clicks - 1)
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