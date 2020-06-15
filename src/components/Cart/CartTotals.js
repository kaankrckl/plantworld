import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import "./CartTotals.css";

const CartTotals = ({value}) => {
    const{cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return(
        <Fragment>
            <div className="container">
                <Link to="/">
                    <button className="btn-clear" onClick={()=>clearCart()}>CLEAR CART</button>
                </Link>

                <h5>
                    <span>subtotal :</span>
                    <strong>$ {cartSubTotal}</strong>
                </h5>

                <h5>
                    <span>tax :</span>
                    <strong> {cartTax}</strong>
                </h5>

                <h5>
                    <span>total :</span>
                    <strong>$ {cartTotal}</strong>
                </h5>

            </div>
        </Fragment>
    )
}

export default CartTotals;