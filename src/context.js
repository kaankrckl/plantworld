import React, { Component } from "react";
import { storePlants, detailPlant } from './data';

const PlantContext = React.createContext();
//Provider
//Consumer


class PlantProvider extends Component {

    state = {
        plants: [],
        detailPlant: detailPlant,
        cart: [],
        modalOpen: false,
        modalPlant: detailPlant,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
    }
    componentDidMount(){
        this.setPlants();
    }
    setPlants = () =>{
        let tempPlants = [];
        storePlants.forEach(item => {
            const singleItem = {...item};
            tempPlants = [...tempPlants, singleItem];

        })
        this.setState(() => {
            return{plants: tempPlants}
        })
    }

    getItem = id => {
        const plant = this.state.plants.find(item => item.id ===id);
        return plant;
    }

     handleDetail = (id) => {
        const plant = this.getItem(id);
        this.setState(()=>{
            return {detailPlant: plant}
        })
    }
     addToCart = id => {
        let tempPlants = [...this.state.plants];
        const index = tempPlants.indexOf(this.getItem(id));
        const plant = tempPlants[index];
        plant.inCart = true;
        plant.count = 1;
        const price = plant.price;
        plant.total = price;
        this.setState(
            () => {
            return {products: tempPlants, cart: [...this.state.cart,
                 plant]
                }
        }, ()=>{
            this.addTotals();
        })
        console.log(this.state);
    }

    openModal = id => {
        const plant = this.getItem(id);
        this.setState(() => {
            return{
                modalPlant: plant,
                modalOpen: true
            };
        })
    }

    closeModal = () => {
        this.setState(() => {
            return { modalOpen:false };
        })
    }
    
    removeItem = (id) => {
        let tempPlants = [...this.state.plants];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempPlants.indexOf(this.getItem(id));
        let removedPlant = tempPlants[index];
        removedPlant.inCart = false;
        removedPlant.count = 0;
        removedPlant.total = 0;

        this.setState(()=> {
            return{
                cart: [...tempCart],
                plants: [...tempPlants]
            }
        }, ()=> {
            this.addTotals();
        })


    }

    clearCart = () => {
        this.setState(()=> {
            return { cart: [] };
        }, ()=> {
            this.setPlants();
        })
    }
    increment = (id) =>{
        let tempCart = [...this.state.cart];
        const selectedPlant = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedPlant);
        const plant = tempCart[index]; 
        plant.count = plant.count +1;
        plant.total = plant.count * plant.price;

        this.setState(()=>{return{cart:[...tempCart]}}, ()=>{this.addTotals()})
    }
    decrement = (id) =>{
        let tempCart = [...this.state.cart];
        const selectedPlant = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedPlant);
        const plant = tempCart[index];
        plant.count = plant.count -1;

        if(plant.count===0){
            this.removeItem(id)
        }
        else{
            plant.total = plant.count * plant.price;
            this.setState(()=>{return{cart:[...tempCart]}}, ()=>{this.addTotals()})
        }
    }

    addTotals= () => {
        let subTotal = 0;
        this.state.cart.map(item =>(
            subTotal+= item.total
        ));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=> {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }
    render (){
        return(
        <PlantContext.Provider value={{
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart,
            openModal: this.openModal,
            closeModal: this.closeModal,
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart: this.clearCart
        }}>
            {this.props.children}
        </PlantContext.Provider>
    );}
}
const PlantConsumer = PlantContext.Consumer;

export {PlantProvider, PlantConsumer};