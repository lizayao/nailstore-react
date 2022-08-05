import React from "react";
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";

function CartWidget(){
    return(
        <div className="carrito">
            <a href="#"><FontAwesomeIcon icon={ faCartShopping } /></a>
        </div>
    )
}
export default CartWidget
