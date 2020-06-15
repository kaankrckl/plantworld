import React, { Fragment } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import {Switch, Route} from "react-router-dom";
import Product from "./components/Product/Product";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default/Default";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route exact path="/details" component={Details}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route  component={Default}></Route>
      </Switch>
      <Modal />
    </Fragment>
  );
}

export default App;
