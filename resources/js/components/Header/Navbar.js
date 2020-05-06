import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

function Navbar(props) {
    let context = useContext(AppContext);
    return (
            <nav className="navbar">
                <p className="navhead">Menu</p>
                <div className="checkout">
                    <div className="cart" onClick = {context.startPurchasing}></div>
                    <div className="count">{context.pizzaCount}</div>
                </div>
            </nav> 
    )
}

export default Navbar;