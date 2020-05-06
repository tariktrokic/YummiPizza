import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';

function Form(props) {
    let context = useContext(AppContext);
    let [formState,setState] = useState({});
    let handleInputChange = (event) => {
        setState({...formState,[event.target.id]: event.target.value});
    };

    return (
            <form className="form">
                <legend>Your information</legend>
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname" value={formState.fname || ''} onChange={handleInputChange}/>
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname" value={formState.lname || ''} onChange={handleInputChange}/>
                <label htmlFor="adress">Adress:</label>
                <input type="text" id="adress" name="adress" value={formState.adress || ''} onChange={handleInputChange}/>
                <button className="submitOrderButton" 
                onClick = {(e) => {context.submitOrder(e,props.pizzaOrder,props.orderCost,formState.fname,formState.lname,formState.adress)}}>Submit your order</button>
            </form>
    )
}

export default Form;