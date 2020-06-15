import React, { Fragment, useEffect, useState } from "react";
import Product from "../Product/Product";
import Title from "../Title/Title"
import "./ProductList.css";
import { PlantConsumer } from '../../context';
const ProductList = () => {

    return(
        
        <Fragment>
            
            <div className="main">
                <Title name="Welcome" title="to my garden!" />
                <div className="product">
                <PlantConsumer>
                    {value => {
                       return value.plants.map( plant => {
                           return <Product key={plant.id} plant={plant}/>;
                       })
                    }}
                </PlantConsumer>
                </div>

            </div>
        </Fragment>
    );
}

export default ProductList;