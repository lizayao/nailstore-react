import React, {useEffect, useState} from "react";
import itemsData from "../../data/data";
import Card from "../Card/Card";
import ItemList from "./ItemList";

function getProductos(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(itemsData), 2000)
    })
};

function ItemListContainer(){
    const [data, setData] = useState([]);
    useEffect(() => {
        getProductos().then((respuesta) => {
            setData(respuesta);
        });
    }, []);     
    
    return(
        <div>
            <Card
                name = {data.name}
                price = {data.price}
                imgurl = {data.imgurl}
                description = {data.description}
            />
            <ItemList></ItemList>
        </div>
    );
}

export default ItemListContainer;