import React, { Fragment } from "react";
import Title from "../Title/Title";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { PlantConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import "./Cart.css"

const Cart = () =>{
    return(
        <section>
            <PlantConsumer>
                {value => {
                    const {cart} = value;
                    if(cart.length>0){
                        return (
                            <Fragment>
                                <Title name="Your" title="products"/>
                                <CartItem/>
                                <CartList value={value}/>
                                <CartTotals value={value}/>
                            </Fragment>
                        )
                    }
                    else {
                        return <div className="core"><EmptyCart/></div>
                    }
                }}
            </PlantConsumer>
        </section>
    );
}

export default Cart;