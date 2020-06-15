import React from "react";
import CartItem from "./CartItem";

const CartList = ({value}) => {
    const {cart} = value;
    //console.log(value, cart);
    return(
        <div>
            {cart.map(item  => {
              //  console.log(item)
                return <CartItem key={item.id} item={item}
                value={value} />
            })}
            <CartItem/>
        </div>
    )
}

export default CartList;