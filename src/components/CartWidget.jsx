import React from "react";
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import { fa-solid fa-cart-shopping }  from "@fortawesome/free-solid-svg-icons"; */
import { faCoffee }  from "@fortawesome/free-solid-svg-icons";
import * as iconList from "@fortawesome/free-solid-svg-icons";

function CartWidget(){
    return(
        <div className="carrito">
            {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
            <a href="#"><FontAwesomeIcon icon={ faCoffee } /></a>
        </div>
    )
}
export default CartWidget
