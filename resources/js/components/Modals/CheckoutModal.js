import React from 'react';
import Backdrop from './Backdrop';
import Form from '../Form/Form';

function CheckoutModal(props) {
    let formatOrder = [];
    for (const [pizzaName,pizzaAmount] of Object.entries(props.pizzaOrder)) {
        if (pizzaAmount !== 0) {
            formatOrder.push(<li className="cartPizza" key={pizzaName}>{pizzaName} - {pizzaAmount}x</li>)
        }
    };

    let deliveryCost = (props.pizzaCount * 0.1).toFixed(2);
    let orderCostWithDelivery = (props.orderCost + deliveryCost*1).toFixed(2);
    return (
        <>
            <Backdrop/>
            <div className = "checkoutModal">
                <button className="closeModal" onClick = {props.uncheckPizzaAndStopPurchasing}>X</button>
                {formatOrder.length > 0 ? 
                    <>
                        <ul className="cartPizzaList">
                            {formatOrder}
                        </ul>
                        <hr/>
                        <p className="cartCost">Pizza price: {props.orderCost.toFixed(2)}$ / {(props.orderCost * 0.9).toFixed(2)}€</p>
                        <p className="cartCost">Delivery fees: {deliveryCost}$ / {(deliveryCost * 0.9).toFixed(2)}€</p>
                        <p className="cartCost">Total: {orderCostWithDelivery}$ / {(orderCostWithDelivery * 0.9).toFixed(2)}€</p>
                        <Form pizzaOrder = {props.pizzaOrder} orderCost = {orderCostWithDelivery*1}/>
                    </>
                : <p className="emptyCartText">Your cart is empty!</p>}
            </div>
        </>
    )
}

export default CheckoutModal;