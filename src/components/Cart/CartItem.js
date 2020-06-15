import React from "react";
import "./CartItem.css";

const CartItem = ({item, value}) => {
    if(item !== undefined){

        const{id, title, img, price, total, count} = item;
        const{increment, decrement, removeItem} =value;
    
   // console.log(item.item)
    return(
        <div className="container-main">
            <div className="img">
                <img
                src={img}
                className="image"
                alt="plant"
                />
            </div>
            <div className="title">
                <p>{title}</p>
            </div>

            <div className="price">
                <p>$ {price}</p>
            </div>

            <div className="btns">
                <button className="dec" onClick={()=>decrement(id)}>-</button>
                <button className="dec counter">{count}</button>
                <button className="dec" onClick={()=>increment(id)}>+</button>
            </div>

            <div className="total">
                <button className="icon" onClick={()=>removeItem(id)}>
                <i className="fa fa-trash"> </i>
                </button>
            </div>

            <div className="total">
                <strong>item total : $ {total}</strong>
            </div>
        </div>
    )
    
    }
    else{
        return null
    }
}

export default CartItem;