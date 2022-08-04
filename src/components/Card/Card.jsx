import React from "react";
import Button from "../Button/Button";
import "./card.css";

function Card({ name, imgurl, description, price }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <div className="card-img">
        <img src={imgurl} alt="imagen" />
      </div>
      <p>{description}</p>
      <h3>$ {price}</h3>
      <Button type text="Agregar al carrito"></Button>
    </div>
  );
}

export default Card;