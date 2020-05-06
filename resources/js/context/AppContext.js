import React from 'react';

export default React.createContext({
    pizzaCount: null,
    pizzas: [],
    checkedPizza: (pizzaIndex) => {},
    startPurchasing: () => {},
    submitOrder: (e,pizzaOrder,orderCost,name,lastName,adress) => {},
    uncheckPizzaAndStopPurchasing: () => {}
});
