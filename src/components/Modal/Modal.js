import React from 'react';
import "./Modal.css";
import { PlantConsumer } from '../../context';
import { Link } from 'react-router-dom';

const Modal = () => {
    return(
        <PlantConsumer>
            {value => {
                const {modalOpen, closeModal} = value;
                const {img, title, price} = value.modalPlant;

                if(!modalOpen){
                    return null;
                }
                else{
                    return(
                    <div className="contain">
                        <div className="modal">
                            <h5>Item Added To The Cart</h5>
                            <img src={img} alt="plant"/>
                            <h5>{title}</h5>
                            <h5>Price : $ {price}</h5>
                            <Link to="/">
                                <button className="btn-mdl" onClick={() =>closeModal()}>
                                    Continue shopping
                                </button>
                            </Link>
                            <Link to="/cart">
                                <button className="btn-mdl" onClick={() =>closeModal()}>
                                    Go to cart
                                </button>
                            </Link>
                        </div>
                    </div>
                    )
                }
            }}
        </PlantConsumer>
    )
}

export default Modal