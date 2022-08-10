import React, {useEffect, useState} from "react";
import itemsData from "../../data/data";
import Card from "../Card/Card";

function ItemList(){
    const [data, setData] = useState([]);
    {data.map((data) => {
        return(
            <Card
                name = {data.name}
                price = {data.price}
                imgurl = {data.imgurl}
                description = {data.description}
            />
        )
    })}
}

export default ItemList;