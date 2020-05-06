import React, { useContext } from 'react';
import Pizza from './Pizza';
import AppContext from '../../context/AppContext'

function PizzaList(props) {
    let context = useContext(AppContext);
    let pizzaMenu = null;
    if (props.pizzas.length > 0) {
        let pizzas = props.pizzas;
        pizzaMenu = pizzas.map((pizza,index) => <Pizza pizzaName={pizza.name} pizzaPrice={pizza.price} key={pizza.id} clickPizza = {e => {context.checkedPizza(index)}}/>);
    }
    return (
        <>
            {pizzaMenu}
        </>
    )
}

export default PizzaList;