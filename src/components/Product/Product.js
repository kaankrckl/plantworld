import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { PlantConsumer } from '../../context';
import './Product.css';
import PropTypes from 'prop-types';

const Product = (props) => {
    const { id, title, img, price, description, inCart } = props.plant;   
    return(
        <Fragment>
          <PlantConsumer>
            {(value) => (
      <div className="img-container" onClick={() => value.handleDetail(id)}>
      <div className="img">
        <Link to="/details">
        <img src={img} alt="plant" className="image"/>
        </Link>
      
        <button
         className="cart-btn"
         disabled={inCart?true:false}
        onClick={() => {
          value.addToCart(id);
          value.openModal(id);
          }}>
          {inCart ? (
            <p className="" disabled>
              {" "}
              IN CART

            </p>
          ): (
            <div className="add-c">
              <i className="fa fa-cart-plus icon"> </i>
            </div>
            )}
        </button>
        </div>
        <div className="footer">
          <p>{title}</p>
          <h5 className="price">
            <span>$</span>
            {price}
          </h5>
        </div>
      
      </div>
            )}
          </PlantConsumer>

        </Fragment>

    );
}

Product.propTypes = {
  plant: PropTypes.shape({
    plantid: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}

export default Product;