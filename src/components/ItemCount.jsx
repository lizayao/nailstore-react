import React from "react";

function ItemCount(props) {
  const [clicks, setClicks] = React.useState(1);

  const handleIncrement = () => {
    //condicion q el click no supere el stock
    setClicks(clicks+1)
    /* (clicks = stock) ? (setClicks(clicks+1)) : setClicks(clicks+0) */
  };

  const handleDecrement = () => {
    setClicks(clicks-1)
  };

  const onAdd = () => {
    console.log("Producto agregado")
  };

  return (
    <>
      <h3>Item Counter</h3>
      <button onClick={handleDecrement}>restar</button>
      <button onClick={handleIncrement}>sumar</button>
      <button onClick={onAdd}>Agregar</button>
    </>
  );
}

export default ItemCount;