import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './ItemCart.css';

export const ItemCart = ({ item }) => {
    const { addItemCart, deleteItemCart } = useContext(AuthContext);
    const { id } = item;

    return (
        <div className="ItemCart">
            <img className="cartImg" src={item.img} alt={item.item_name}></img>
            <div>{item.item_name}</div>
            <button className="cartBtn" onClick={() => addItemCart(item)}><AddCircleIcon /></button>
            <div>{item.quantity}</div>
            <button className="cartBtn" onClick={()=> deleteItemCart(item)}><RemoveCircleIcon/></button>
            <p>Subtotal: {item.quantity * item.price_without_tax}</p>
        </div>
    )
}