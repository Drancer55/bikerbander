import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './ItemCart.css';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

export const ItemCart = ({ item }) => {
    const { addItemCart, deleteItemCart, deleteAllItemCart } = useContext(AuthContext);
    const { id } = item;

    return (
        <div>
            <div className="totalRow">
                <img className="cartImg" src={item.img} alt={item.item_name}></img>
                <div className="sellTitle">{item.item_name}
                    <div className="sellSubTitle">{item.short_description}</div>
                </div>
                <button className="cartBtn" onClick={() => addItemCart(item)}><AddCircleIcon /></button>
                <div>{item.quantity}</div>
                <button className="cartBtn" onClick={()=> deleteItemCart(item)}><RemoveCircleIcon/></button>
                <p className="quantity">${item.quantity * item.price_without_tax}.00</p>
                <br/>
                <button onClick={() => deleteAllItemCart(item)}className="cartBtnTrash"><DeleteTwoToneIcon/></button>
            </div>
        </div>
    )
}