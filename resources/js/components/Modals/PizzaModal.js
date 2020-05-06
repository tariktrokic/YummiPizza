import React from 'react';
import Backdrop from './Backdrop';

function PizzaModal(props) {
    return (
        <>
            <Backdrop/>
            <div className = "modal">
            <button className="closeModal" onClick = {props.uncheckPizzaAndStopPurchasing}>X</button>
                <div className="pizzaModal">
                    <h2 className="pizzaModalName">{props.pizzaName}</h2>
                    <h3 className="pizzaModalPrice">{props.pizzaPrice}$ / {(props.pizzaPrice * 0.9).toFixed(2)}€</h3>
                    <p className="pizzaModalText">Add/Remove to/from cart</p>
                    <div className="pizzaModalButtons">
                        <button onClick= {props.removePizza}>-</button>
                        <p className="pizzaModalCount">{props.pizzaOrder[props.pizzaName] || 0}</p>
                        <button onClick = {props.addPizza}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PizzaModal;