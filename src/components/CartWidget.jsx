import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import { fa-solid fa-cart-shopping }  from "@fortawesome/free-solid-svg-icons"; */
import * as iconList from "@fortawesome/free-solid-svg-icons";

function CartWidget(){
    return(
        <div>
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        </div>
    )
}
export default CartWidget