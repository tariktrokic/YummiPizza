import React from 'react';

function Pizza(props) {
    return (
        <div className="singlePizza" onClick = {props.clickPizza}>
            <div className="pizzaImage">
                <img src="../../../images/Pizza.jpg"></img>
            </div>
            <div className="pizzaDetails">
            <h2>{props.pizzaName}</h2>
            <h3>{props.pizzaPrice}$ / {(props.pizzaPrice * 0.9).toFixed(2)}€</h3>
            </div>
        </div>
    )
}

export default Pizza;