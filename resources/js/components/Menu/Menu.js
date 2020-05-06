import React, { useContext } from 'react';
import PizzaList from './PizzaList';
import AppContext from '../../context/AppContext';

function Menu(props) {
    let context = useContext(AppContext);
    return (
        <div className="menu">
            <div className="menuColumns">
                <PizzaList pizzas={context.pizzas}/>
            </div> 
        </div>
    )
}

export default Menu;