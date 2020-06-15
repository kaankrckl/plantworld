import React from "react";
import { PlantConsumer } from '../../context';
import "./Details.css";
import { Link } from 'react-router-dom';
 
const Details = () => {
    return(
        <PlantConsumer>
            {value => {
               // console.log(value.detailPlant);
               const{id, title, img, price,  description, inCart} = value.detailPlant;
                return (
                    <div key={id} className="container">
                        <div className="title">
                            <h1>
                                {title}
                            </h1>
                        </div>

                     <div className="maino">
                     <div className="imgo">
                            <img src={img} alt="plant"/>
                        </div>

                        <div className="info">

                            <div className="desc">
                                <p>{description}</p>
                            </div>

                            <div className="price">
                                <h4>Price: $ {price}</h4>
                            </div>

                            <div className="btns">
                                <Link to="/">
                                    <button className="btn-detail">
                                        Back to Garden
                                    </button>
                                </Link>
                                <button className="btn-detail" disabled={inCart?true:false} onClick={() =>{
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}>
                                    {inCart ? "In Cart" : "Add to cart"}
                                    
                                </button>
                            </div>

                        </div>
                     </div>    
                        

                    </div>
                )
            
            }}
        </PlantConsumer>
    );
}

export default Details;